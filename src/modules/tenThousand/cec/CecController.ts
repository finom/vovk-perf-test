import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cec")
export default class CecController {
  @operation({
    summary: "Get Cec",
  })
  @get()
  static getCec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cec",
  })
  @post("{id}")
  static createCec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
