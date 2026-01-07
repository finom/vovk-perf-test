import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mue")
export default class MueController {
  @operation({
    summary: "Get Mue",
  })
  @get()
  static getMue = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mue",
  })
  @post("{id}")
  static createMue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
