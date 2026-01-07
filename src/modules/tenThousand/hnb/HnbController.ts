import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnb")
export default class HnbController {
  @operation({
    summary: "Get Hnb",
  })
  @get()
  static getHnb = procedure({
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
