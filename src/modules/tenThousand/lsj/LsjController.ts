import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsj")
export default class LsjController {
  @operation({
    summary: "Get Lsj",
  })
  @get()
  static getLsj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsj",
  })
  @post("{id}")
  static createLsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
