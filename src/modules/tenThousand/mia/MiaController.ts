import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mias")
export default class MiaController {
  @operation({
    summary: "Get Mias",
  })
  @get()
  static getMias = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mia",
  })
  @post("{id}")
  static createMia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
