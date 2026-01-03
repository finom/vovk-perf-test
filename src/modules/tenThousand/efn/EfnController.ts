import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efns")
export default class EfnController {
  @operation({
    summary: "Get Efns",
  })
  @get()
  static getEfns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efn",
  })
  @post("{id}")
  static createEfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
