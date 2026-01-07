import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bog")
export default class BogController {
  @operation({
    summary: "Get Bog",
  })
  @get()
  static getBog = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bog",
  })
  @post("{id}")
  static createBog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
