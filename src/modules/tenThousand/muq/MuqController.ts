import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muqs")
export default class MuqController {
  @operation({
    summary: "Get Muqs",
  })
  @get()
  static getMuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muq",
  })
  @post("{id}")
  static createMuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
