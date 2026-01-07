import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auu")
export default class AuuController {
  @operation({
    summary: "Get Auu",
  })
  @get()
  static getAuu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auu",
  })
  @post("{id}")
  static createAuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
