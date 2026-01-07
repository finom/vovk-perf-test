import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nia")
export default class NiaController {
  @operation({
    summary: "Get Nia",
  })
  @get()
  static getNia = procedure({
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
