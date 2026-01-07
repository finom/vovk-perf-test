import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmj")
export default class KmjController {
  @operation({
    summary: "Get Kmj",
  })
  @get()
  static getKmj = procedure({
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
