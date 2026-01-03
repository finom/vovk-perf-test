import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cafs")
export default class CafController {
  @operation({
    summary: "Get Cafs",
  })
  @get()
  static getCafs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Caf",
  })
  @post("{id}")
  static createCaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
