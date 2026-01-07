import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgj")
export default class MgjController {
  @operation({
    summary: "Get Mgj",
  })
  @get()
  static getMgj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgj",
  })
  @post("{id}")
  static createMgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
