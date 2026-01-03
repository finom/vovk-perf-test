import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmes")
export default class KmeController {
  @operation({
    summary: "Get Kmes",
  })
  @get()
  static getKmes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kme",
  })
  @post("{id}")
  static createKme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
