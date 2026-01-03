import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nogs")
export default class NogController {
  @operation({
    summary: "Get Nogs",
  })
  @get()
  static getNogs = procedure({
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
