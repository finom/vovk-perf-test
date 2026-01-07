import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afh")
export default class AfhController {
  @operation({
    summary: "Get Afh",
  })
  @get()
  static getAfh = procedure({
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
