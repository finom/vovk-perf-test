import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msy")
export default class MsyController {
  @operation({
    summary: "Get Msy",
  })
  @get()
  static getMsy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msy",
  })
  @post("{id}")
  static createMsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
