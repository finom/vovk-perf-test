import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apcs")
export default class ApcController {
  @operation({
    summary: "Get Apcs",
  })
  @get()
  static getApcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apc",
  })
  @post("{id}")
  static createApc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
