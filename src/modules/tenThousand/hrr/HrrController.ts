import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrrs")
export default class HrrController {
  @operation({
    summary: "Get Hrrs",
  })
  @get()
  static getHrrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrr",
  })
  @post("{id}")
  static createHrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
