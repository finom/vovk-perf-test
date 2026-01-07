import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maa")
export default class MaaController {
  @operation({
    summary: "Get Maa",
  })
  @get()
  static getMaa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Maa",
  })
  @post("{id}")
  static createMaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
