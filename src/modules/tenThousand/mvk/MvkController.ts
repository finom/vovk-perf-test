import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvk")
export default class MvkController {
  @operation({
    summary: "Get Mvk",
  })
  @get()
  static getMvk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvk",
  })
  @post("{id}")
  static createMvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
