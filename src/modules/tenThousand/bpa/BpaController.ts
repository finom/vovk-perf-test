import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpas")
export default class BpaController {
  @operation({
    summary: "Get Bpas",
  })
  @get()
  static getBpas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpa",
  })
  @post("{id}")
  static createBpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
