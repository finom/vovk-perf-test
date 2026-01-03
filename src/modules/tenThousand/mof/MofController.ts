import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mofs")
export default class MofController {
  @operation({
    summary: "Get Mofs",
  })
  @get()
  static getMofs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mof",
  })
  @post("{id}")
  static createMof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
