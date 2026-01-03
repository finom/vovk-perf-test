import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moqs")
export default class MoqController {
  @operation({
    summary: "Get Moqs",
  })
  @get()
  static getMoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moq",
  })
  @post("{id}")
  static createMoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
