import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ap")
export default class ApController {
  @operation({
    summary: "Get Ap",
  })
  @get()
  static getAp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ap",
  })
  @post("{id}")
  static createAp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
