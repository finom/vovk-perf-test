import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecr")
export default class EcrController {
  @operation({
    summary: "Get Ecr",
  })
  @get()
  static getEcr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecr",
  })
  @post("{id}")
  static createEcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
