import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idl")
export default class IdlController {
  @operation({
    summary: "Get Idl",
  })
  @get()
  static getIdl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idl",
  })
  @post("{id}")
  static createIdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
