import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwy")
export default class FwyController {
  @operation({
    summary: "Get Fwy",
  })
  @get()
  static getFwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwy",
  })
  @post("{id}")
  static createFwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
