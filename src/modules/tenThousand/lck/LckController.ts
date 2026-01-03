import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcks")
export default class LckController {
  @operation({
    summary: "Get Lcks",
  })
  @get()
  static getLcks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lck",
  })
  @post("{id}")
  static createLck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
