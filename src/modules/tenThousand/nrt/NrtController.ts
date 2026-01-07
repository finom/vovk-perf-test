import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrt")
export default class NrtController {
  @operation({
    summary: "Get Nrt",
  })
  @get()
  static getNrt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrt",
  })
  @post("{id}")
  static createNrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
