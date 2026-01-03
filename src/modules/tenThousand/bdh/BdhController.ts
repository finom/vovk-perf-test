import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdhs")
export default class BdhController {
  @operation({
    summary: "Get Bdhs",
  })
  @get()
  static getBdhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdh",
  })
  @post("{id}")
  static createBdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
