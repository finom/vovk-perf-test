import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsa")
export default class LsaController {
  @operation({
    summary: "Get Lsa",
  })
  @get()
  static getLsa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsa",
  })
  @post("{id}")
  static createLsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
