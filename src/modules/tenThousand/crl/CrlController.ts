import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crl")
export default class CrlController {
  @operation({
    summary: "Get Crl",
  })
  @get()
  static getCrl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crl",
  })
  @post("{id}")
  static createCrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
