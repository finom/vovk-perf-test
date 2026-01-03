import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daes")
export default class DaeController {
  @operation({
    summary: "Get Daes",
  })
  @get()
  static getDaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dae",
  })
  @post("{id}")
  static createDae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
