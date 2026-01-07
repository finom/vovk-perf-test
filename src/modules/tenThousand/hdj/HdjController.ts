import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdj")
export default class HdjController {
  @operation({
    summary: "Get Hdj",
  })
  @get()
  static getHdj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdj",
  })
  @post("{id}")
  static createHdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
