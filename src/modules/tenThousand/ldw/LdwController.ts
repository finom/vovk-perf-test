import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldw")
export default class LdwController {
  @operation({
    summary: "Get Ldw",
  })
  @get()
  static getLdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldw",
  })
  @post("{id}")
  static createLdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
