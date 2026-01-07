import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axx")
export default class AxxController {
  @operation({
    summary: "Get Axx",
  })
  @get()
  static getAxx = procedure({
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
