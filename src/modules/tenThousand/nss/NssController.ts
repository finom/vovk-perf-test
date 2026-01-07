import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nss")
export default class NssController {
  @operation({
    summary: "Get Nss",
  })
  @get()
  static getNss = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nss",
  })
  @post("{id}")
  static createNss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
