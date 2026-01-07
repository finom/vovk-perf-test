import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdi")
export default class MdiController {
  @operation({
    summary: "Get Mdi",
  })
  @get()
  static getMdi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdi",
  })
  @post("{id}")
  static createMdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
