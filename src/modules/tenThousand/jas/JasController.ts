import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jas")
export default class JasController {
  @operation({
    summary: "Get Jas",
  })
  @get()
  static getJas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jas",
  })
  @post("{id}")
  static createJas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
