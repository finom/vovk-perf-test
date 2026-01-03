import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnbs")
export default class HnbController {
  @operation({
    summary: "Get Hnbs",
  })
  @get()
  static getHnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnb",
  })
  @post("{id}")
  static createHnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
