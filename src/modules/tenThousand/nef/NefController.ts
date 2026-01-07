import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nef")
export default class NefController {
  @operation({
    summary: "Get Nef",
  })
  @get()
  static getNef = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nef",
  })
  @post("{id}")
  static createNef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
