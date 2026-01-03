import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwxes")
export default class KwxController {
  @operation({
    summary: "Get Kwxes",
  })
  @get()
  static getKwxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwx",
  })
  @post("{id}")
  static createKwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
