import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egfs")
export default class EgfController {
  @operation({
    summary: "Get Egfs",
  })
  @get()
  static getEgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egf",
  })
  @post("{id}")
  static createEgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
