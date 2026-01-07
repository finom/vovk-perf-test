import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flt")
export default class FltController {
  @operation({
    summary: "Get Flt",
  })
  @get()
  static getFlt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flt",
  })
  @post("{id}")
  static createFlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
