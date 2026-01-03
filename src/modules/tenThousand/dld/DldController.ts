import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlds")
export default class DldController {
  @operation({
    summary: "Get Dlds",
  })
  @get()
  static getDlds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dld",
  })
  @post("{id}")
  static createDld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
