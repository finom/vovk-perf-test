import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlhs")
export default class MlhController {
  @operation({
    summary: "Get Mlhs",
  })
  @get()
  static getMlhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlh",
  })
  @post("{id}")
  static createMlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
