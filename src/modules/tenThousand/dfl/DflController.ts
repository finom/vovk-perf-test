import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfl")
export default class DflController {
  @operation({
    summary: "Get Dfl",
  })
  @get()
  static getDfl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfl",
  })
  @post("{id}")
  static createDfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
