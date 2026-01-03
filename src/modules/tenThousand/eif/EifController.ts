import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eifs")
export default class EifController {
  @operation({
    summary: "Get Eifs",
  })
  @get()
  static getEifs = procedure({
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
