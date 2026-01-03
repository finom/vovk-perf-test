import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emws")
export default class EmwController {
  @operation({
    summary: "Get Emws",
  })
  @get()
  static getEmws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emw",
  })
  @post("{id}")
  static createEmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
