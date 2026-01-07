import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itt")
export default class IttController {
  @operation({
    summary: "Get Itt",
  })
  @get()
  static getItt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itt",
  })
  @post("{id}")
  static createItt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
