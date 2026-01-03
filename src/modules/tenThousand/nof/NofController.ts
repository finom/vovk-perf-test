import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nofs")
export default class NofController {
  @operation({
    summary: "Get Nofs",
  })
  @get()
  static getNofs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nof",
  })
  @post("{id}")
  static createNof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
