import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkj")
export default class NkjController {
  @operation({
    summary: "Get Nkj",
  })
  @get()
  static getNkj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkj",
  })
  @post("{id}")
  static createNkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
