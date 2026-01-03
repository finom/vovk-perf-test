import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlps")
export default class MlpController {
  @operation({
    summary: "Get Mlps",
  })
  @get()
  static getMlps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlp",
  })
  @post("{id}")
  static createMlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
