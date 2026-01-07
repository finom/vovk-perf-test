import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuc")
export default class KucController {
  @operation({
    summary: "Get Kuc",
  })
  @get()
  static getKuc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuc",
  })
  @post("{id}")
  static createKuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
