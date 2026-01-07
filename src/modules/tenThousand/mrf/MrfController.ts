import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrf")
export default class MrfController {
  @operation({
    summary: "Get Mrf",
  })
  @get()
  static getMrf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrf",
  })
  @post("{id}")
  static createMrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
