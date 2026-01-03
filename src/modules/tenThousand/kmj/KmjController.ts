import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmjs")
export default class KmjController {
  @operation({
    summary: "Get Kmjs",
  })
  @get()
  static getKmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmj",
  })
  @post("{id}")
  static createKmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
