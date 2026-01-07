import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdj")
export default class BdjController {
  @operation({
    summary: "Get Bdj",
  })
  @get()
  static getBdj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdj",
  })
  @post("{id}")
  static createBdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
