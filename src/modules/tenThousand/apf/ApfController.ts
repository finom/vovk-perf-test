import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apfs")
export default class ApfController {
  @operation({
    summary: "Get Apfs",
  })
  @get()
  static getApfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apf",
  })
  @post("{id}")
  static createApf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
