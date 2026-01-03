import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqts")
export default class DqtController {
  @operation({
    summary: "Get Dqts",
  })
  @get()
  static getDqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqt",
  })
  @post("{id}")
  static createDqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
