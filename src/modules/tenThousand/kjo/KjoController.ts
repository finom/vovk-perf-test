import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjos")
export default class KjoController {
  @operation({
    summary: "Get Kjos",
  })
  @get()
  static getKjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjo",
  })
  @post("{id}")
  static createKjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
