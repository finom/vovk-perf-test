import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loq")
export default class LoqController {
  @operation({
    summary: "Get Loq",
  })
  @get()
  static getLoq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loq",
  })
  @post("{id}")
  static createLoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
