import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nim")
export default class NimController {
  @operation({
    summary: "Get Nim",
  })
  @get()
  static getNim = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nim",
  })
  @post("{id}")
  static createNim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
