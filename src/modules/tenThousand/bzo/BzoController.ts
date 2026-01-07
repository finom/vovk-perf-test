import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzo")
export default class BzoController {
  @operation({
    summary: "Get Bzo",
  })
  @get()
  static getBzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzo",
  })
  @post("{id}")
  static createBzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
