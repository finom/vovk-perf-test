import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnjs")
export default class CnjController {
  @operation({
    summary: "Get Cnjs",
  })
  @get()
  static getCnjs = procedure({
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
