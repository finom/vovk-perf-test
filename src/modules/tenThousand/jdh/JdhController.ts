import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdh")
export default class JdhController {
  @operation({
    summary: "Get Jdh",
  })
  @get()
  static getJdh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdh",
  })
  @post("{id}")
  static createJdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
