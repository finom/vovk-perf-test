import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtos")
export default class MtoController {
  @operation({
    summary: "Get Mtos",
  })
  @get()
  static getMtos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mto",
  })
  @post("{id}")
  static createMto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
