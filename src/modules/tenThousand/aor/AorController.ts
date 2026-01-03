import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aors")
export default class AorController {
  @operation({
    summary: "Get Aors",
  })
  @get()
  static getAors = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aor",
  })
  @post("{id}")
  static createAor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
