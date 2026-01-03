import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmxes")
export default class KmxController {
  @operation({
    summary: "Get Kmxes",
  })
  @get()
  static getKmxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmx",
  })
  @post("{id}")
  static createKmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
