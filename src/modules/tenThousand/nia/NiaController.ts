import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nias")
export default class NiaController {
  @operation({
    summary: "Get Nias",
  })
  @get()
  static getNias = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nia",
  })
  @post("{id}")
  static createNia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
