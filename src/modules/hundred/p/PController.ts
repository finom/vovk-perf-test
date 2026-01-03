import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ps")
export default class PController {
  @operation({
    summary: "Get PS",
  })
  @get()
  static getPS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create P",
  })
  @post("{id}")
  static createP = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
