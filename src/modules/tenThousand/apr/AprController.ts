import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aprs")
export default class AprController {
  @operation({
    summary: "Get Aprs",
  })
  @get()
  static getAprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apr",
  })
  @post("{id}")
  static createApr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
