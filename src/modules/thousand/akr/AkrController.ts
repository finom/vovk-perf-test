import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akrs")
export default class AkrController {
  @operation({
    summary: "Get Akrs",
  })
  @get()
  static getAkrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akr",
  })
  @post("{id}")
  static createAkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
