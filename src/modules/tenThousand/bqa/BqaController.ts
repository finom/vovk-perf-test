import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqas")
export default class BqaController {
  @operation({
    summary: "Get Bqas",
  })
  @get()
  static getBqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqa",
  })
  @post("{id}")
  static createBqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
