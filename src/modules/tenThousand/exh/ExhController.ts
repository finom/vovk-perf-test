import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exh")
export default class ExhController {
  @operation({
    summary: "Get Exh",
  })
  @get()
  static getExh = procedure({
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
