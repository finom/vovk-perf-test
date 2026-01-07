import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akx")
export default class AkxController {
  @operation({
    summary: "Get Akx",
  })
  @get()
  static getAkx = procedure({
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
