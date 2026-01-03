import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msies")
export default class MsyController {
  @operation({
    summary: "Get Msies",
  })
  @get()
  static getMsies = procedure({
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
