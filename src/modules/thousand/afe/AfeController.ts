import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afes")
export default class AfeController {
  @operation({
    summary: "Get Afes",
  })
  @get()
  static getAfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afe",
  })
  @post("{id}")
  static createAfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
