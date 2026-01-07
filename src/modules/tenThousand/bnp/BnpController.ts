import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnp")
export default class BnpController {
  @operation({
    summary: "Get Bnp",
  })
  @get()
  static getBnp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnp",
  })
  @post("{id}")
  static createBnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
