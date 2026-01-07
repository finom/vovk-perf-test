import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsg")
export default class LsgController {
  @operation({
    summary: "Get Lsg",
  })
  @get()
  static getLsg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsg",
  })
  @post("{id}")
  static createLsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
