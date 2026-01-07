import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwb")
export default class JwbController {
  @operation({
    summary: "Get Jwb",
  })
  @get()
  static getJwb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwb",
  })
  @post("{id}")
  static createJwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
