import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lto")
export default class LtoController {
  @operation({
    summary: "Get Lto",
  })
  @get()
  static getLto = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lto",
  })
  @post("{id}")
  static createLto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
