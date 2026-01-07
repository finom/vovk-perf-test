import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpu")
export default class LpuController {
  @operation({
    summary: "Get Lpu",
  })
  @get()
  static getLpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpu",
  })
  @post("{id}")
  static createLpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
