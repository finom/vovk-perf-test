import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhjs")
export default class MhjController {
  @operation({
    summary: "Get Mhjs",
  })
  @get()
  static getMhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhj",
  })
  @post("{id}")
  static createMhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
