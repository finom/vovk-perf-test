import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmd")
export default class NmdController {
  @operation({
    summary: "Get Nmd",
  })
  @get()
  static getNmd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmd",
  })
  @post("{id}")
  static createNmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
