import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoxen")
export default class EoxController {
  @operation({
    summary: "Get Eoxen",
  })
  @get()
  static getEoxen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eox",
  })
  @post("{id}")
  static createEox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
