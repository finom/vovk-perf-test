import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwws")
export default class KwwController {
  @operation({
    summary: "Get Kwws",
  })
  @get()
  static getKwws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kww",
  })
  @post("{id}")
  static createKww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
