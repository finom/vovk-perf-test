import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpqs")
export default class CpqController {
  @operation({
    summary: "Get Cpqs",
  })
  @get()
  static getCpqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpq",
  })
  @post("{id}")
  static createCpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
