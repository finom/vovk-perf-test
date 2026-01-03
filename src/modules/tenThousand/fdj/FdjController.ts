import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdjs")
export default class FdjController {
  @operation({
    summary: "Get Fdjs",
  })
  @get()
  static getFdjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdj",
  })
  @post("{id}")
  static createFdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
