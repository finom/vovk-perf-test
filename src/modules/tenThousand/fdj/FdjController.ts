import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdj")
export default class FdjController {
  @operation({
    summary: "Get Fdj",
  })
  @get()
  static getFdj = procedure({
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
