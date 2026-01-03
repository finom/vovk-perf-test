import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrfs")
export default class MrfController {
  @operation({
    summary: "Get Mrfs",
  })
  @get()
  static getMrfs = procedure({
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
