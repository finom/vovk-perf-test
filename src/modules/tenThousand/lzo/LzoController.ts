import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzos")
export default class LzoController {
  @operation({
    summary: "Get Lzos",
  })
  @get()
  static getLzos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzo",
  })
  @post("{id}")
  static createLzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
