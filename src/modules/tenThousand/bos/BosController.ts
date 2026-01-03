import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bos")
export default class BosController {
  @operation({
    summary: "Get Bos",
  })
  @get()
  static getBos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bos",
  })
  @post("{id}")
  static createBos = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
