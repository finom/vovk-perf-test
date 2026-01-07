import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxa")
export default class KxaController {
  @operation({
    summary: "Get Kxa",
  })
  @get()
  static getKxa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxa",
  })
  @post("{id}")
  static createKxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
