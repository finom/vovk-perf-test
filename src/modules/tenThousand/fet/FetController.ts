import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fets")
export default class FetController {
  @operation({
    summary: "Get Fets",
  })
  @get()
  static getFets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fet",
  })
  @post("{id}")
  static createFet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
