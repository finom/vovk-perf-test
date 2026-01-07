import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbw")
export default class MbwController {
  @operation({
    summary: "Get Mbw",
  })
  @get()
  static getMbw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbw",
  })
  @post("{id}")
  static createMbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
