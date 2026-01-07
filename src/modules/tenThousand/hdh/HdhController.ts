import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdh")
export default class HdhController {
  @operation({
    summary: "Get Hdh",
  })
  @get()
  static getHdh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdh",
  })
  @post("{id}")
  static createHdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
