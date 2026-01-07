import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqt")
export default class DqtController {
  @operation({
    summary: "Get Dqt",
  })
  @get()
  static getDqt = procedure({
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
