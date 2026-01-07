import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwh")
export default class MwhController {
  @operation({
    summary: "Get Mwh",
  })
  @get()
  static getMwh = procedure({
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
