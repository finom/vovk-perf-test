import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljfs")
export default class LjfController {
  @operation({
    summary: "Get Ljfs",
  })
  @get()
  static getLjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljf",
  })
  @post("{id}")
  static createLjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
