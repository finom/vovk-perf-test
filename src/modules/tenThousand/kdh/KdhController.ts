import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdh")
export default class KdhController {
  @operation({
    summary: "Get Kdh",
  })
  @get()
  static getKdh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdh",
  })
  @post("{id}")
  static createKdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
