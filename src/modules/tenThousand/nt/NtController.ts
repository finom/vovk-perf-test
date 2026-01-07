import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nt")
export default class NtController {
  @operation({
    summary: "Get Nt",
  })
  @get()
  static getNt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nt",
  })
  @post("{id}")
  static createNt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
