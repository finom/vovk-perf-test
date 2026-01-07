import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kva")
export default class KvaController {
  @operation({
    summary: "Get Kva",
  })
  @get()
  static getKva = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kva",
  })
  @post("{id}")
  static createKva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
