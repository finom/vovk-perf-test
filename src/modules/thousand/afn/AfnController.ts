import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afn")
export default class AfnController {
  @operation({
    summary: "Get Afn",
  })
  @get()
  static getAfn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afn",
  })
  @post("{id}")
  static createAfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
