import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpjs")
export default class MpjController {
  @operation({
    summary: "Get Mpjs",
  })
  @get()
  static getMpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpj",
  })
  @post("{id}")
  static createMpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
