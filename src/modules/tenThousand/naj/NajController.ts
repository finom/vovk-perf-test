import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naj")
export default class NajController {
  @operation({
    summary: "Get Naj",
  })
  @get()
  static getNaj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Naj",
  })
  @post("{id}")
  static createNaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
