import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpp")
export default class KppController {
  @operation({
    summary: "Get Kpp",
  })
  @get()
  static getKpp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpp",
  })
  @post("{id}")
  static createKpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
