import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnj")
export default class CnjController {
  @operation({
    summary: "Get Cnj",
  })
  @get()
  static getCnj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnj",
  })
  @post("{id}")
  static createCnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
