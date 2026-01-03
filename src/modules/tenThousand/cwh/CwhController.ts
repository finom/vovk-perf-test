import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwhs")
export default class CwhController {
  @operation({
    summary: "Get Cwhs",
  })
  @get()
  static getCwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwh",
  })
  @post("{id}")
  static createCwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
