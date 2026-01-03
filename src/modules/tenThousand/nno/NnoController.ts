import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnos")
export default class NnoController {
  @operation({
    summary: "Get Nnos",
  })
  @get()
  static getNnos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nno",
  })
  @post("{id}")
  static createNno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
