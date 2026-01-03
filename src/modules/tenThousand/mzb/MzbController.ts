import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzbs")
export default class MzbController {
  @operation({
    summary: "Get Mzbs",
  })
  @get()
  static getMzbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzb",
  })
  @post("{id}")
  static createMzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
