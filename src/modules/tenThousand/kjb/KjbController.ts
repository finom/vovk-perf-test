import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjb")
export default class KjbController {
  @operation({
    summary: "Get Kjb",
  })
  @get()
  static getKjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjb",
  })
  @post("{id}")
  static createKjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
