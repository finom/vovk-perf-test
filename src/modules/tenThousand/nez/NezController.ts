import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nez")
export default class NezController {
  @operation({
    summary: "Get Nez",
  })
  @get()
  static getNez = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nez",
  })
  @post("{id}")
  static createNez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
