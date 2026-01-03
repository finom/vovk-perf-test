import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eghs")
export default class EghController {
  @operation({
    summary: "Get Eghs",
  })
  @get()
  static getEghs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egh",
  })
  @post("{id}")
  static createEgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
