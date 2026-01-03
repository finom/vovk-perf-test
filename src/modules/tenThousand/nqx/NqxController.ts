import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqxes")
export default class NqxController {
  @operation({
    summary: "Get Nqxes",
  })
  @get()
  static getNqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqx",
  })
  @post("{id}")
  static createNqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
