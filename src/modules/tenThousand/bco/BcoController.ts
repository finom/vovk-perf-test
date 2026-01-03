import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcos")
export default class BcoController {
  @operation({
    summary: "Get Bcos",
  })
  @get()
  static getBcos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bco",
  })
  @post("{id}")
  static createBco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
