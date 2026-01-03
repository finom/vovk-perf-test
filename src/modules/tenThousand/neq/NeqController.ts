import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neqs")
export default class NeqController {
  @operation({
    summary: "Get Neqs",
  })
  @get()
  static getNeqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Neq",
  })
  @post("{id}")
  static createNeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
