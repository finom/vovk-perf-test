import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzzes")
export default class KzzController {
  @operation({
    summary: "Get Kzzes",
  })
  @get()
  static getKzzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzz",
  })
  @post("{id}")
  static createKzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
