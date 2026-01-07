import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmx")
export default class MmxController {
  @operation({
    summary: "Get Mmx",
  })
  @get()
  static getMmx = procedure({
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
