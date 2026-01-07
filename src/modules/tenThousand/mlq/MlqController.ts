import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlq")
export default class MlqController {
  @operation({
    summary: "Get Mlq",
  })
  @get()
  static getMlq = procedure({
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
