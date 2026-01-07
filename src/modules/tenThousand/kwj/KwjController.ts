import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwj")
export default class KwjController {
  @operation({
    summary: "Get Kwj",
  })
  @get()
  static getKwj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwj",
  })
  @post("{id}")
  static createKwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
