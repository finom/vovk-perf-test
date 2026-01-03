import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frcs")
export default class FrcController {
  @operation({
    summary: "Get Frcs",
  })
  @get()
  static getFrcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frc",
  })
  @post("{id}")
  static createFrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
