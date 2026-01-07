import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htb")
export default class HtbController {
  @operation({
    summary: "Get Htb",
  })
  @get()
  static getHtb = procedure({
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
