import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ian")
export default class IanController {
  @operation({
    summary: "Get Ian",
  })
  @get()
  static getIan = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ian",
  })
  @post("{id}")
  static createIan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
