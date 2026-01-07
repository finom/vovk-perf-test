import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwu")
export default class KwuController {
  @operation({
    summary: "Get Kwu",
  })
  @get()
  static getKwu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwu",
  })
  @post("{id}")
  static createKwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
