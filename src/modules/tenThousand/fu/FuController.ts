import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fu")
export default class FuController {
  @operation({
    summary: "Get Fu",
  })
  @get()
  static getFu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fu",
  })
  @post("{id}")
  static createFu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
