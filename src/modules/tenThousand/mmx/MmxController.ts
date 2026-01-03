import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmxes")
export default class MmxController {
  @operation({
    summary: "Get Mmxes",
  })
  @get()
  static getMmxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmx",
  })
  @post("{id}")
  static createMmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
