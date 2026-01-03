import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpqs")
export default class MpqController {
  @operation({
    summary: "Get Mpqs",
  })
  @get()
  static getMpqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpq",
  })
  @post("{id}")
  static createMpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
