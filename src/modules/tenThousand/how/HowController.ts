import { procedure, prefix, get, post, operation } from "vovk";

@prefix("how")
export default class HowController {
  @operation({
    summary: "Get How",
  })
  @get()
  static getHow = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create How",
  })
  @post("{id}")
  static createHow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
