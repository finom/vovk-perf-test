import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrs")
export default class NrsController {
  @operation({
    summary: "Get Nrs",
  })
  @get()
  static getNrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrs",
  })
  @post("{id}")
  static createNrs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
