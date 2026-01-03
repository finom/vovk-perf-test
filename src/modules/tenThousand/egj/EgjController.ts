import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egjs")
export default class EgjController {
  @operation({
    summary: "Get Egjs",
  })
  @get()
  static getEgjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egj",
  })
  @post("{id}")
  static createEgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
