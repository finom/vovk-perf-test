import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbj")
export default class LbjController {
  @operation({
    summary: "Get Lbj",
  })
  @get()
  static getLbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbj",
  })
  @post("{id}")
  static createLbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
