import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kla")
export default class KlaController {
  @operation({
    summary: "Get Kla",
  })
  @get()
  static getKla = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kla",
  })
  @post("{id}")
  static createKla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
