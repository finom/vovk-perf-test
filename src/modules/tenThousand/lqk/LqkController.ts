import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqks")
export default class LqkController {
  @operation({
    summary: "Get Lqks",
  })
  @get()
  static getLqks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqk",
  })
  @post("{id}")
  static createLqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
