import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drrs")
export default class DrrController {
  @operation({
    summary: "Get Drrs",
  })
  @get()
  static getDrrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drr",
  })
  @post("{id}")
  static createDrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
