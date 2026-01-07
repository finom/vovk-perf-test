import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrc")
export default class HrcController {
  @operation({
    summary: "Get Hrc",
  })
  @get()
  static getHrc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrc",
  })
  @post("{id}")
  static createHrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
