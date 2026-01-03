import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbzs")
export default class MbzController {
  @operation({
    summary: "Get Mbzs",
  })
  @get()
  static getMbzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbz",
  })
  @post("{id}")
  static createMbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
