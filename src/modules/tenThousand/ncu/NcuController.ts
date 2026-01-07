import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncu")
export default class NcuController {
  @operation({
    summary: "Get Ncu",
  })
  @get()
  static getNcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncu",
  })
  @post("{id}")
  static createNcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
