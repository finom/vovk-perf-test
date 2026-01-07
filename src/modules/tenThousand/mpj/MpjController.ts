import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpj")
export default class MpjController {
  @operation({
    summary: "Get Mpj",
  })
  @get()
  static getMpj = procedure({
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
