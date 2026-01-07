import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afe")
export default class AfeController {
  @operation({
    summary: "Get Afe",
  })
  @get()
  static getAfe = procedure({
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
