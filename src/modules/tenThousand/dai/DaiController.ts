import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dais")
export default class DaiController {
  @operation({
    summary: "Get Dais",
  })
  @get()
  static getDais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dai",
  })
  @post("{id}")
  static createDai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
