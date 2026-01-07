import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akw")
export default class AkwController {
  @operation({
    summary: "Get Akw",
  })
  @get()
  static getAkw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akw",
  })
  @post("{id}")
  static createAkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
