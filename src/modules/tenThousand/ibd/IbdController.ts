import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibds")
export default class IbdController {
  @operation({
    summary: "Get Ibds",
  })
  @get()
  static getIbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibd",
  })
  @post("{id}")
  static createIbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
