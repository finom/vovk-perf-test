import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmk")
export default class KmkController {
  @operation({
    summary: "Get Kmk",
  })
  @get()
  static getKmk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmk",
  })
  @post("{id}")
  static createKmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
