import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cea")
export default class CeaController {
  @operation({
    summary: "Get Cea",
  })
  @get()
  static getCea = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cea",
  })
  @post("{id}")
  static createCea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
