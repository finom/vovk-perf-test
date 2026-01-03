import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njgs")
export default class NjgController {
  @operation({
    summary: "Get Njgs",
  })
  @get()
  static getNjgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njg",
  })
  @post("{id}")
  static createNjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
