import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqc")
export default class NqcController {
  @operation({
    summary: "Get Nqc",
  })
  @get()
  static getNqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqc",
  })
  @post("{id}")
  static createNqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
