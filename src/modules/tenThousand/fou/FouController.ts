import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fous")
export default class FouController {
  @operation({
    summary: "Get Fous",
  })
  @get()
  static getFous = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fou",
  })
  @post("{id}")
  static createFou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
