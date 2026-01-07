import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mku")
export default class MkuController {
  @operation({
    summary: "Get Mku",
  })
  @get()
  static getMku = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mku",
  })
  @post("{id}")
  static createMku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
