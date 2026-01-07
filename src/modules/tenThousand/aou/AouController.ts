import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aou")
export default class AouController {
  @operation({
    summary: "Get Aou",
  })
  @get()
  static getAou = procedure({
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
