import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdns")
export default class JdnController {
  @operation({
    summary: "Get Jdns",
  })
  @get()
  static getJdns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdn",
  })
  @post("{id}")
  static createJdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
