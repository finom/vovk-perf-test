import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmd")
export default class FmdController {
  @operation({
    summary: "Get Fmd",
  })
  @get()
  static getFmd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmd",
  })
  @post("{id}")
  static createFmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
