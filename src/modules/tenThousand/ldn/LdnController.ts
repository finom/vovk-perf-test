import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldns")
export default class LdnController {
  @operation({
    summary: "Get Ldns",
  })
  @get()
  static getLdns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldn",
  })
  @post("{id}")
  static createLdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
