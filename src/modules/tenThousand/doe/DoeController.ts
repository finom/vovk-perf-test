import { procedure, prefix, get, post, operation } from "vovk";

@prefix("does")
export default class DoeController {
  @operation({
    summary: "Get Does",
  })
  @get()
  static getDoes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doe",
  })
  @post("{id}")
  static createDoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
