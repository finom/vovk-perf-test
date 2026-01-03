import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwfs")
export default class JwfController {
  @operation({
    summary: "Get Jwfs",
  })
  @get()
  static getJwfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwf",
  })
  @post("{id}")
  static createJwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
