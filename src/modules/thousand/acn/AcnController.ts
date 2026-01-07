import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acn")
export default class AcnController {
  @operation({
    summary: "Get Acn",
  })
  @get()
  static getAcn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acn",
  })
  @post("{id}")
  static createAcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
