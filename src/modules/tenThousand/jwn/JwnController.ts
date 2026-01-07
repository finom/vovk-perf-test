import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwn")
export default class JwnController {
  @operation({
    summary: "Get Jwn",
  })
  @get()
  static getJwn = procedure({
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
