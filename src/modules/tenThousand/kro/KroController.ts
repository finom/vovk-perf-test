import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kro")
export default class KroController {
  @operation({
    summary: "Get Kro",
  })
  @get()
  static getKro = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kro",
  })
  @post("{id}")
  static createKro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
