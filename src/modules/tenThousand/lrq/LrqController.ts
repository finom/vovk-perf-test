import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrqs")
export default class LrqController {
  @operation({
    summary: "Get Lrqs",
  })
  @get()
  static getLrqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrq",
  })
  @post("{id}")
  static createLrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
