import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pa")
export default class PaController {
  @operation({
    summary: "Get Pa",
  })
  @get()
  static getPa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pa",
  })
  @post("{id}")
  static createPa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
