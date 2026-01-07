import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heg")
export default class HegController {
  @operation({
    summary: "Get Heg",
  })
  @get()
  static getHeg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Heg",
  })
  @post("{id}")
  static createHeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
