import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjas")
export default class CjaController {
  @operation({
    summary: "Get Cjas",
  })
  @get()
  static getCjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cja",
  })
  @post("{id}")
  static createCja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
