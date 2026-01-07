import { procedure, prefix, get, post, operation } from "vovk";

@prefix("con")
export default class ConController {
  @operation({
    summary: "Get Con",
  })
  @get()
  static getCon = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Con",
  })
  @post("{id}")
  static createCon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
