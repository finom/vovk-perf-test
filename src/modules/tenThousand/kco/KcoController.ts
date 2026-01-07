import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kco")
export default class KcoController {
  @operation({
    summary: "Get Kco",
  })
  @get()
  static getKco = procedure({
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
