import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ans")
export default class AnsController {
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
    summary: "Create Ans",
  })
  @post("{id}")
  static createAns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
