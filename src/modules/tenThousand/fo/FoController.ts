import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fos")
export default class FoController {
  @operation({
    summary: "Get Fos",
  })
  @get()
  static getFos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fo",
  })
  @post("{id}")
  static createFo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
