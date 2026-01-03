import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dos")
export default class DosController {
  @operation({
    summary: "Get Dos",
  })
  @get()
  static getDos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dos",
  })
  @post("{id}")
  static createDos = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
