import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibd")
export default class IbdController {
  @operation({
    summary: "Get Ibd",
  })
  @get()
  static getIbd = procedure({
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
