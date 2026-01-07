import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdi")
export default class FdiController {
  @operation({
    summary: "Get Fdi",
  })
  @get()
  static getFdi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdi",
  })
  @post("{id}")
  static createFdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
