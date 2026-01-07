import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdi")
export default class BdiController {
  @operation({
    summary: "Get Bdi",
  })
  @get()
  static getBdi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdi",
  })
  @post("{id}")
  static createBdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
