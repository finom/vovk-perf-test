import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mem")
export default class MemController {
  @operation({
    summary: "Get Mem",
  })
  @get()
  static getMem = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mem",
  })
  @post("{id}")
  static createMem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
