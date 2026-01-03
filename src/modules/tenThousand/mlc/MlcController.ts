import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlcs")
export default class MlcController {
  @operation({
    summary: "Get Mlcs",
  })
  @get()
  static getMlcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlc",
  })
  @post("{id}")
  static createMlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
