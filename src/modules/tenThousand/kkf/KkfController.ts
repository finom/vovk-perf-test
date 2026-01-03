import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkfs")
export default class KkfController {
  @operation({
    summary: "Get Kkfs",
  })
  @get()
  static getKkfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkf",
  })
  @post("{id}")
  static createKkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
