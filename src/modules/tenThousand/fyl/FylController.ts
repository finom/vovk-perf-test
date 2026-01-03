import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyls")
export default class FylController {
  @operation({
    summary: "Get Fyls",
  })
  @get()
  static getFyls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyl",
  })
  @post("{id}")
  static createFyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
