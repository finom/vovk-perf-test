import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmxes")
export default class LmxController {
  @operation({
    summary: "Get Lmxes",
  })
  @get()
  static getLmxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmx",
  })
  @post("{id}")
  static createLmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
