import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkj")
export default class KkjController {
  @operation({
    summary: "Get Kkj",
  })
  @get()
  static getKkj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkj",
  })
  @post("{id}")
  static createKkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
