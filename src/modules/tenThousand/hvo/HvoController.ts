import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvo")
export default class HvoController {
  @operation({
    summary: "Get Hvo",
  })
  @get()
  static getHvo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvo",
  })
  @post("{id}")
  static createHvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
