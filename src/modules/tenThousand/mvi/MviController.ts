import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvi")
export default class MviController {
  @operation({
    summary: "Get Mvi",
  })
  @get()
  static getMvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvi",
  })
  @post("{id}")
  static createMvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
