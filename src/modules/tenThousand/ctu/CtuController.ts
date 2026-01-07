import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctu")
export default class CtuController {
  @operation({
    summary: "Get Ctu",
  })
  @get()
  static getCtu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctu",
  })
  @post("{id}")
  static createCtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
