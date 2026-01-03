import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fias")
export default class FiaController {
  @operation({
    summary: "Get Fias",
  })
  @get()
  static getFias = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fia",
  })
  @post("{id}")
  static createFia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
