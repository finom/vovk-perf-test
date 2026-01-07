import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niu")
export default class NiuController {
  @operation({
    summary: "Get Niu",
  })
  @get()
  static getNiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Niu",
  })
  @post("{id}")
  static createNiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
