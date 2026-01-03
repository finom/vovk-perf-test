import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dits")
export default class DitController {
  @operation({
    summary: "Get Dits",
  })
  @get()
  static getDits = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dit",
  })
  @post("{id}")
  static createDit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
