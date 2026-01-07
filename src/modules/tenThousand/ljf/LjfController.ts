import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljf")
export default class LjfController {
  @operation({
    summary: "Get Ljf",
  })
  @get()
  static getLjf = procedure({
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
