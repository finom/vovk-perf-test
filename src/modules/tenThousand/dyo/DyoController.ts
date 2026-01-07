import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyo")
export default class DyoController {
  @operation({
    summary: "Get Dyo",
  })
  @get()
  static getDyo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyo",
  })
  @post("{id}")
  static createDyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
