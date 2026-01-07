import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfj")
export default class KfjController {
  @operation({
    summary: "Get Kfj",
  })
  @get()
  static getKfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfj",
  })
  @post("{id}")
  static createKfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
