import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnps")
export default class BnpController {
  @operation({
    summary: "Get Bnps",
  })
  @get()
  static getBnps = procedure({
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
