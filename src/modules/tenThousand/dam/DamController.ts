import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dams")
export default class DamController {
  @operation({
    summary: "Get Dams",
  })
  @get()
  static getDams = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dam",
  })
  @post("{id}")
  static createDam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
