import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cga")
export default class CgaController {
  @operation({
    summary: "Get Cga",
  })
  @get()
  static getCga = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cga",
  })
  @post("{id}")
  static createCga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
