import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkn")
export default class NknController {
  @operation({
    summary: "Get Nkn",
  })
  @get()
  static getNkn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkn",
  })
  @post("{id}")
  static createNkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
