import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mad")
export default class MadController {
  @operation({
    summary: "Get Mad",
  })
  @get()
  static getMad = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mad",
  })
  @post("{id}")
  static createMad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
