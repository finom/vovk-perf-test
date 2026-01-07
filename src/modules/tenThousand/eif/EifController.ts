import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eif")
export default class EifController {
  @operation({
    summary: "Get Eif",
  })
  @get()
  static getEif = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eif",
  })
  @post("{id}")
  static createEif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
