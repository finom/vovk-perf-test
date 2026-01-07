import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtn")
export default class MtnController {
  @operation({
    summary: "Get Mtn",
  })
  @get()
  static getMtn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtn",
  })
  @post("{id}")
  static createMtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
