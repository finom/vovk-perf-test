import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ns")
export default class NController {
  @operation({
    summary: "Get NS",
  })
  @get()
  static getNS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create N",
  })
  @post("{id}")
  static createN = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
