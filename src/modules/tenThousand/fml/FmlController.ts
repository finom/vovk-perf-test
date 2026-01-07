import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fml")
export default class FmlController {
  @operation({
    summary: "Get Fml",
  })
  @get()
  static getFml = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fml",
  })
  @post("{id}")
  static createFml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
