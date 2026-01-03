import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ars")
export default class ArsController {
  @operation({
    summary: "Get Ars",
  })
  @get()
  static getArs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ars",
  })
  @post("{id}")
  static createArs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
