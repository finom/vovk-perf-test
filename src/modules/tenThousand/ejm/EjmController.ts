import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejm")
export default class EjmController {
  @operation({
    summary: "Get Ejm",
  })
  @get()
  static getEjm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejm",
  })
  @post("{id}")
  static createEjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
