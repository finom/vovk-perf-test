import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mras")
export default class MraController {
  @operation({
    summary: "Get Mras",
  })
  @get()
  static getMras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mra",
  })
  @post("{id}")
  static createMra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
