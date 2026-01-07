import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpy")
export default class FpyController {
  @operation({
    summary: "Get Fpy",
  })
  @get()
  static getFpy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpy",
  })
  @post("{id}")
  static createFpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
