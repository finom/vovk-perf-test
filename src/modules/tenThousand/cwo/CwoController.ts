import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwos")
export default class CwoController {
  @operation({
    summary: "Get Cwos",
  })
  @get()
  static getCwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwo",
  })
  @post("{id}")
  static createCwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
