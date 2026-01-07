import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yn")
export default class YnController {
  @operation({
    summary: "Get Yn",
  })
  @get()
  static getYn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yn",
  })
  @post("{id}")
  static createYn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
