import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bofs")
export default class BofController {
  @operation({
    summary: "Get Bofs",
  })
  @get()
  static getBofs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bof",
  })
  @post("{id}")
  static createBof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
