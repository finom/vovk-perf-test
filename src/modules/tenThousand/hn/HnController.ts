import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hn")
export default class HnController {
  @operation({
    summary: "Get Hn",
  })
  @get()
  static getHn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hn",
  })
  @post("{id}")
  static createHn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
