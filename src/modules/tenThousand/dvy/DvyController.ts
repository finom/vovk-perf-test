import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvy")
export default class DvyController {
  @operation({
    summary: "Get Dvy",
  })
  @get()
  static getDvy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvy",
  })
  @post("{id}")
  static createDvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
