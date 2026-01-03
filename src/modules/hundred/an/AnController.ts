import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ans")
export default class AnController {
  @operation({
    summary: "Get Ans",
  })
  @get()
  static getAns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create An",
  })
  @post("{id}")
  static createAn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
