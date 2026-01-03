import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntos")
export default class NtoController {
  @operation({
    summary: "Get Ntos",
  })
  @get()
  static getNtos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nto",
  })
  @post("{id}")
  static createNto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
