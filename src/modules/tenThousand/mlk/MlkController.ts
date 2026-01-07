import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlk")
export default class MlkController {
  @operation({
    summary: "Get Mlk",
  })
  @get()
  static getMlk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlk",
  })
  @post("{id}")
  static createMlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
