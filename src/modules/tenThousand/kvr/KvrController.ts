import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvr")
export default class KvrController {
  @operation({
    summary: "Get Kvr",
  })
  @get()
  static getKvr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvr",
  })
  @post("{id}")
  static createKvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
