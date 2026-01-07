import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdh")
export default class BdhController {
  @operation({
    summary: "Get Bdh",
  })
  @get()
  static getBdh = procedure({
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
