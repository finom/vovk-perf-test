import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enns")
export default class EnnController {
  @operation({
    summary: "Get Enns",
  })
  @get()
  static getEnns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enn",
  })
  @post("{id}")
  static createEnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
