import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnos")
export default class BnoController {
  @operation({
    summary: "Get Bnos",
  })
  @get()
  static getBnos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bno",
  })
  @post("{id}")
  static createBno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
