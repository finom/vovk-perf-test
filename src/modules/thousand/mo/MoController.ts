import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mos")
export default class MoController {
  @operation({
    summary: "Get Mos",
  })
  @get()
  static getMos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mo",
  })
  @post("{id}")
  static createMo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
