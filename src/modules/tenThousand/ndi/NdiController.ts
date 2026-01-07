import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndi")
export default class NdiController {
  @operation({
    summary: "Get Ndi",
  })
  @get()
  static getNdi = procedure({
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
