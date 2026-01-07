import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbn")
export default class HbnController {
  @operation({
    summary: "Get Hbn",
  })
  @get()
  static getHbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbn",
  })
  @post("{id}")
  static createHbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
