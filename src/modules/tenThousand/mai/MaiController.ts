import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mai")
export default class MaiController {
  @operation({
    summary: "Get Mai",
  })
  @get()
  static getMai = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mai",
  })
  @post("{id}")
  static createMai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
