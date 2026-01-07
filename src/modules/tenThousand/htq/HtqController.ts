import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htq")
export default class HtqController {
  @operation({
    summary: "Get Htq",
  })
  @get()
  static getHtq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htq",
  })
  @post("{id}")
  static createHtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
