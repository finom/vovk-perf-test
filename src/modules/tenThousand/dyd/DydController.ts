import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyd")
export default class DydController {
  @operation({
    summary: "Get Dyd",
  })
  @get()
  static getDyd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyd",
  })
  @post("{id}")
  static createDyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
