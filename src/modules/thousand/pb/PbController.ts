import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pbs")
export default class PbController {
  @operation({
    summary: "Get Pbs",
  })
  @get()
  static getPbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pb",
  })
  @post("{id}")
  static createPb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
