import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnp")
export default class CnpController {
  @operation({
    summary: "Get Cnp",
  })
  @get()
  static getCnp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnp",
  })
  @post("{id}")
  static createCnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
