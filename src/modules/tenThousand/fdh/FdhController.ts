import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdhs")
export default class FdhController {
  @operation({
    summary: "Get Fdhs",
  })
  @get()
  static getFdhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdh",
  })
  @post("{id}")
  static createFdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
