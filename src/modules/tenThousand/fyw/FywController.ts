import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyw")
export default class FywController {
  @operation({
    summary: "Get Fyw",
  })
  @get()
  static getFyw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyw",
  })
  @post("{id}")
  static createFyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
