import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csrs")
export default class CsrController {
  @operation({
    summary: "Get Csrs",
  })
  @get()
  static getCsrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csr",
  })
  @post("{id}")
  static createCsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
