import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hul")
export default class HulController {
  @operation({
    summary: "Get Hul",
  })
  @get()
  static getHul = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hul",
  })
  @post("{id}")
  static createHul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
