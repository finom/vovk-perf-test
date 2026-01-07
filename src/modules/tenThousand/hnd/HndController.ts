import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnd")
export default class HndController {
  @operation({
    summary: "Get Hnd",
  })
  @get()
  static getHnd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnd",
  })
  @post("{id}")
  static createHnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
