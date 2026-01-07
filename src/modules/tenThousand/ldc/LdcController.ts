import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldc")
export default class LdcController {
  @operation({
    summary: "Get Ldc",
  })
  @get()
  static getLdc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldc",
  })
  @post("{id}")
  static createLdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
