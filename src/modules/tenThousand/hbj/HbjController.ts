import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbj")
export default class HbjController {
  @operation({
    summary: "Get Hbj",
  })
  @get()
  static getHbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbj",
  })
  @post("{id}")
  static createHbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
