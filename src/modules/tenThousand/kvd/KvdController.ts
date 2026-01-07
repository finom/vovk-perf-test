import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvd")
export default class KvdController {
  @operation({
    summary: "Get Kvd",
  })
  @get()
  static getKvd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvd",
  })
  @post("{id}")
  static createKvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
