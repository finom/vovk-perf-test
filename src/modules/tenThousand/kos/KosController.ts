import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kos")
export default class KosController {
  @operation({
    summary: "Get Kos",
  })
  @get()
  static getKos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kos",
  })
  @post("{id}")
  static createKos = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
