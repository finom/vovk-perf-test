import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwns")
export default class JwnController {
  @operation({
    summary: "Get Jwns",
  })
  @get()
  static getJwns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwn",
  })
  @post("{id}")
  static createJwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
