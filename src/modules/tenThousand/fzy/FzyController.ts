import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzy")
export default class FzyController {
  @operation({
    summary: "Get Fzy",
  })
  @get()
  static getFzy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzy",
  })
  @post("{id}")
  static createFzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
