import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mub")
export default class MubController {
  @operation({
    summary: "Get Mub",
  })
  @get()
  static getMub = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mub",
  })
  @post("{id}")
  static createMub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
