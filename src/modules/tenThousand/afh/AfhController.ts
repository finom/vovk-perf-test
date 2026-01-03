import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afhs")
export default class AfhController {
  @operation({
    summary: "Get Afhs",
  })
  @get()
  static getAfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afh",
  })
  @post("{id}")
  static createAfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
