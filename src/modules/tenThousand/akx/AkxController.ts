import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akxes")
export default class AkxController {
  @operation({
    summary: "Get Akxes",
  })
  @get()
  static getAkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akx",
  })
  @post("{id}")
  static createAkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
