import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgies")
export default class MgyController {
  @operation({
    summary: "Get Mgies",
  })
  @get()
  static getMgies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgy",
  })
  @post("{id}")
  static createMgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
