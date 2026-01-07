import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nog")
export default class NogController {
  @operation({
    summary: "Get Nog",
  })
  @get()
  static getNog = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nog",
  })
  @post("{id}")
  static createNog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
