import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbt")
export default class CbtController {
  @operation({
    summary: "Get Cbt",
  })
  @get()
  static getCbt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbt",
  })
  @post("{id}")
  static createCbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
