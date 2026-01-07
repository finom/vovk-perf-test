import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khl")
export default class KhlController {
  @operation({
    summary: "Get Khl",
  })
  @get()
  static getKhl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khl",
  })
  @post("{id}")
  static createKhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
