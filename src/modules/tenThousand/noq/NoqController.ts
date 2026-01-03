import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noqs")
export default class NoqController {
  @operation({
    summary: "Get Noqs",
  })
  @get()
  static getNoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noq",
  })
  @post("{id}")
  static createNoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
