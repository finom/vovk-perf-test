import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmn")
export default class LmnController {
  @operation({
    summary: "Get Lmn",
  })
  @get()
  static getLmn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmn",
  })
  @post("{id}")
  static createLmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
