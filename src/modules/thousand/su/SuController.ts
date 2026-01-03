import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sus")
export default class SuController {
  @operation({
    summary: "Get Sus",
  })
  @get()
  static getSus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Su",
  })
  @post("{id}")
  static createSu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
