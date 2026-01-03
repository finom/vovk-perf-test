import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlies")
export default class MlyController {
  @operation({
    summary: "Get Mlies",
  })
  @get()
  static getMlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mly",
  })
  @post("{id}")
  static createMly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
