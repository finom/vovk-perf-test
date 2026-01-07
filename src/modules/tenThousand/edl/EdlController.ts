import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edl")
export default class EdlController {
  @operation({
    summary: "Get Edl",
  })
  @get()
  static getEdl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edl",
  })
  @post("{id}")
  static createEdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
