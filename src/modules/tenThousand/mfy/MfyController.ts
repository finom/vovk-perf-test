import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfies")
export default class MfyController {
  @operation({
    summary: "Get Mfies",
  })
  @get()
  static getMfies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfy",
  })
  @post("{id}")
  static createMfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
