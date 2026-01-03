import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecies")
export default class EcyController {
  @operation({
    summary: "Get Ecies",
  })
  @get()
  static getEcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecy",
  })
  @post("{id}")
  static createEcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
