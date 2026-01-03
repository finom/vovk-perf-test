import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efvs")
export default class EfvController {
  @operation({
    summary: "Get Efvs",
  })
  @get()
  static getEfvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efv",
  })
  @post("{id}")
  static createEfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
