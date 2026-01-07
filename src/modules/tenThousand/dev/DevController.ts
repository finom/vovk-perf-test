import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dev")
export default class DevController {
  @operation({
    summary: "Get Dev",
  })
  @get()
  static getDev = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dev",
  })
  @post("{id}")
  static createDev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
