import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coq")
export default class CoqController {
  @operation({
    summary: "Get Coq",
  })
  @get()
  static getCoq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coq",
  })
  @post("{id}")
  static createCoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
