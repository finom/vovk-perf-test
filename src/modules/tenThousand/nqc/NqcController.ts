import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqcs")
export default class NqcController {
  @operation({
    summary: "Get Nqcs",
  })
  @get()
  static getNqcs = procedure({
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
