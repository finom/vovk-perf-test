import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mps")
export default class MpsController {
  @operation({
    summary: "Get Mps",
  })
  @get()
  static getMps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mps",
  })
  @post("{id}")
  static createMps = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
