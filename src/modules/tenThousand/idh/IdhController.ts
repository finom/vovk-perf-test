import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idh")
export default class IdhController {
  @operation({
    summary: "Get Idh",
  })
  @get()
  static getIdh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idh",
  })
  @post("{id}")
  static createIdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
