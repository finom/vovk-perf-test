import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipi")
export default class IpiController {
  @operation({
    summary: "Get Ipi",
  })
  @get()
  static getIpi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipi",
  })
  @post("{id}")
  static createIpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
