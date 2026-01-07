import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mm")
export default class MmController {
  @operation({
    summary: "Get Mm",
  })
  @get()
  static getMm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mm",
  })
  @post("{id}")
  static createMm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
