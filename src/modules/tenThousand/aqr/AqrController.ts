import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqrs")
export default class AqrController {
  @operation({
    summary: "Get Aqrs",
  })
  @get()
  static getAqrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqr",
  })
  @post("{id}")
  static createAqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
