import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mphs")
export default class MphController {
  @operation({
    summary: "Get Mphs",
  })
  @get()
  static getMphs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mph",
  })
  @post("{id}")
  static createMph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
