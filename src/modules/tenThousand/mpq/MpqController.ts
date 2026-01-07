import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpq")
export default class MpqController {
  @operation({
    summary: "Get Mpq",
  })
  @get()
  static getMpq = procedure({
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
