import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdh")
export default class FdhController {
  @operation({
    summary: "Get Fdh",
  })
  @get()
  static getFdh = procedure({
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
