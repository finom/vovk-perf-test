import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apz")
export default class ApzController {
  @operation({
    summary: "Get Apz",
  })
  @get()
  static getApz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apz",
  })
  @post("{id}")
  static createApz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
