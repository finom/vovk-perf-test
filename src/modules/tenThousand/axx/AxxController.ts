import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axxes")
export default class AxxController {
  @operation({
    summary: "Get Axxes",
  })
  @get()
  static getAxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axx",
  })
  @post("{id}")
  static createAxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
