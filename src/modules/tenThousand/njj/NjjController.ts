import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njjs")
export default class NjjController {
  @operation({
    summary: "Get Njjs",
  })
  @get()
  static getNjjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njj",
  })
  @post("{id}")
  static createNjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
