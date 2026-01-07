import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kn")
export default class KnController {
  @operation({
    summary: "Get Kn",
  })
  @get()
  static getKn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kn",
  })
  @post("{id}")
  static createKn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
