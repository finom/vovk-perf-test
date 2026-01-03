import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htbs")
export default class HtbController {
  @operation({
    summary: "Get Htbs",
  })
  @get()
  static getHtbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htb",
  })
  @post("{id}")
  static createHtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
