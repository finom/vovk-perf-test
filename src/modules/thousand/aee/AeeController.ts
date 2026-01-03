import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aees")
export default class AeeController {
  @operation({
    summary: "Get Aees",
  })
  @get()
  static getAees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aee",
  })
  @post("{id}")
  static createAee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
