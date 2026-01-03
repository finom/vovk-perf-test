import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meas")
export default class MeaController {
  @operation({
    summary: "Get Meas",
  })
  @get()
  static getMeas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mea",
  })
  @post("{id}")
  static createMea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
