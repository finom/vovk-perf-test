import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exhs")
export default class ExhController {
  @operation({
    summary: "Get Exhs",
  })
  @get()
  static getExhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exh",
  })
  @post("{id}")
  static createExh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
