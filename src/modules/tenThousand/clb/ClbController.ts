import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clb")
export default class ClbController {
  @operation({
    summary: "Get Clb",
  })
  @get()
  static getClb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clb",
  })
  @post("{id}")
  static createClb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
