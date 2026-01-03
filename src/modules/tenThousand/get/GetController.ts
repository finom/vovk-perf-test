import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gets")
export default class GetController {
  @operation({
    summary: "Get Gets",
  })
  @get()
  static getGets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Get",
  })
  @post("{id}")
  static createGet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
