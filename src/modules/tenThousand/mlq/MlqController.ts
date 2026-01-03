import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlqs")
export default class MlqController {
  @operation({
    summary: "Get Mlqs",
  })
  @get()
  static getMlqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlq",
  })
  @post("{id}")
  static createMlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
