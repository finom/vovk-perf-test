import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cces")
export default class CceController {
  @operation({
    summary: "Get Cces",
  })
  @get()
  static getCces = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cce",
  })
  @post("{id}")
  static createCce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
