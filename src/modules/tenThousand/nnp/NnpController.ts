import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnps")
export default class NnpController {
  @operation({
    summary: "Get Nnps",
  })
  @get()
  static getNnps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnp",
  })
  @post("{id}")
  static createNnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
