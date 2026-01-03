import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cufs")
export default class CufController {
  @operation({
    summary: "Get Cufs",
  })
  @get()
  static getCufs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuf",
  })
  @post("{id}")
  static createCuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
