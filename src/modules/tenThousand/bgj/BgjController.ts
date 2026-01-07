import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgj")
export default class BgjController {
  @operation({
    summary: "Get Bgj",
  })
  @get()
  static getBgj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgj",
  })
  @post("{id}")
  static createBgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
