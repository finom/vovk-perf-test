import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwf")
export default class JwfController {
  @operation({
    summary: "Get Jwf",
  })
  @get()
  static getJwf = procedure({
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
