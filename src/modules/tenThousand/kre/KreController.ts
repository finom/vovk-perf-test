import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kre")
export default class KreController {
  @operation({
    summary: "Get Kre",
  })
  @get()
  static getKre = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kre",
  })
  @post("{id}")
  static createKre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
