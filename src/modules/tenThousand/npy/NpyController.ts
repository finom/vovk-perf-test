import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npy")
export default class NpyController {
  @operation({
    summary: "Get Npy",
  })
  @get()
  static getNpy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npy",
  })
  @post("{id}")
  static createNpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
