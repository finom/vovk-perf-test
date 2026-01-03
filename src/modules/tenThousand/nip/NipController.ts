import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nips")
export default class NipController {
  @operation({
    summary: "Get Nips",
  })
  @get()
  static getNips = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nip",
  })
  @post("{id}")
  static createNip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
