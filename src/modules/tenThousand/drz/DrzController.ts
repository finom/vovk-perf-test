import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drz")
export default class DrzController {
  @operation({
    summary: "Get Drz",
  })
  @get()
  static getDrz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drz",
  })
  @post("{id}")
  static createDrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
