import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbz")
export default class MbzController {
  @operation({
    summary: "Get Mbz",
  })
  @get()
  static getMbz = procedure({
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
