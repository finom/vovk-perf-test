import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iie")
export default class IieController {
  @operation({
    summary: "Get Iie",
  })
  @get()
  static getIie = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iie",
  })
  @post("{id}")
  static createIie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
