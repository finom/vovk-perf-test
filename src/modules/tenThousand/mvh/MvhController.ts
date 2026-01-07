import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvh")
export default class MvhController {
  @operation({
    summary: "Get Mvh",
  })
  @get()
  static getMvh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvh",
  })
  @post("{id}")
  static createMvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
