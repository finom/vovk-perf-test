import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyg")
export default class CygController {
  @operation({
    summary: "Get Cyg",
  })
  @get()
  static getCyg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyg",
  })
  @post("{id}")
  static createCyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
