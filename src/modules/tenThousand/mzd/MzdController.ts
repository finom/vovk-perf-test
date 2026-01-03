import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzds")
export default class MzdController {
  @operation({
    summary: "Get Mzds",
  })
  @get()
  static getMzds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzd",
  })
  @post("{id}")
  static createMzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
