import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kos")
export default class KoController {
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
    summary: "Create Ko",
  })
  @post("{id}")
  static createKo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
