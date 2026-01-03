import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndis")
export default class NdiController {
  @operation({
    summary: "Get Ndis",
  })
  @get()
  static getNdis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndi",
  })
  @post("{id}")
  static createNdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
