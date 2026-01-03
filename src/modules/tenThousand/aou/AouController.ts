import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aous")
export default class AouController {
  @operation({
    summary: "Get Aous",
  })
  @get()
  static getAous = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aou",
  })
  @post("{id}")
  static createAou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
