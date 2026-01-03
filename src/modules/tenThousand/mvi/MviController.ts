import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvis")
export default class MviController {
  @operation({
    summary: "Get Mvis",
  })
  @get()
  static getMvis = procedure({
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
