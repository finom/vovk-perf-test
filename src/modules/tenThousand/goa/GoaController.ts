import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goa")
export default class GoaController {
  @operation({
    summary: "Get Goa",
  })
  @get()
  static getGoa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goa",
  })
  @post("{id}")
  static createGoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
