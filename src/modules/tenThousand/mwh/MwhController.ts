import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwhs")
export default class MwhController {
  @operation({
    summary: "Get Mwhs",
  })
  @get()
  static getMwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwh",
  })
  @post("{id}")
  static createMwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
