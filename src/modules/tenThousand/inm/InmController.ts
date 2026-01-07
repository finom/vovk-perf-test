import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inm")
export default class InmController {
  @operation({
    summary: "Get Inm",
  })
  @get()
  static getInm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inm",
  })
  @post("{id}")
  static createInm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
