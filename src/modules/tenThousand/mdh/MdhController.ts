import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdh")
export default class MdhController {
  @operation({
    summary: "Get Mdh",
  })
  @get()
  static getMdh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdh",
  })
  @post("{id}")
  static createMdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
