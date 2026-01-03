import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdos")
export default class FdoController {
  @operation({
    summary: "Get Fdos",
  })
  @get()
  static getFdos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdo",
  })
  @post("{id}")
  static createFdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
