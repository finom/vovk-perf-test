import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmns")
export default class KmnController {
  @operation({
    summary: "Get Kmns",
  })
  @get()
  static getKmns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmn",
  })
  @post("{id}")
  static createKmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
