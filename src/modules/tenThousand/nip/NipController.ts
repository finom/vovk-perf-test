import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nip")
export default class NipController {
  @operation({
    summary: "Get Nip",
  })
  @get()
  static getNip = procedure({
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
