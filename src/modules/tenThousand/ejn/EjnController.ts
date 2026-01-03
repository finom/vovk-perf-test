import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejns")
export default class EjnController {
  @operation({
    summary: "Get Ejns",
  })
  @get()
  static getEjns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejn",
  })
  @post("{id}")
  static createEjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
