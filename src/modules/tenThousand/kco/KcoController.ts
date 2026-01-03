import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcos")
export default class KcoController {
  @operation({
    summary: "Get Kcos",
  })
  @get()
  static getKcos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kco",
  })
  @post("{id}")
  static createKco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
