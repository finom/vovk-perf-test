import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fors")
export default class ForController {
  @operation({
    summary: "Get Fors",
  })
  @get()
  static getFors = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create For",
  })
  @post("{id}")
  static createFor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
