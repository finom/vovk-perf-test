import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpb")
export default class CpbController {
  @operation({
    summary: "Get Cpb",
  })
  @get()
  static getCpb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpb",
  })
  @post("{id}")
  static createCpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
