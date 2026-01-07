import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rj")
export default class RjController {
  @operation({
    summary: "Get Rj",
  })
  @get()
  static getRj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rj",
  })
  @post("{id}")
  static createRj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
