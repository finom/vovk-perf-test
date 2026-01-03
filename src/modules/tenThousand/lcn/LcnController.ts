import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcns")
export default class LcnController {
  @operation({
    summary: "Get Lcns",
  })
  @get()
  static getLcns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcn",
  })
  @post("{id}")
  static createLcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
