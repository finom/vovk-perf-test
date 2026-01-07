import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mev")
export default class MevController {
  @operation({
    summary: "Get Mev",
  })
  @get()
  static getMev = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mev",
  })
  @post("{id}")
  static createMev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
