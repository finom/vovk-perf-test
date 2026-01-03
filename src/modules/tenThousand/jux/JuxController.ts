import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juxes")
export default class JuxController {
  @operation({
    summary: "Get Juxes",
  })
  @get()
  static getJuxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jux",
  })
  @post("{id}")
  static createJux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
