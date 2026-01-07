import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cda")
export default class CdaController {
  @operation({
    summary: "Get Cda",
  })
  @get()
  static getCda = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cda",
  })
  @post("{id}")
  static createCda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
