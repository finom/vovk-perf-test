import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpq")
export default class CpqController {
  @operation({
    summary: "Get Cpq",
  })
  @get()
  static getCpq = procedure({
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
