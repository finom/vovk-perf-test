import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqrs")
export default class HqrController {
  @operation({
    summary: "Get Hqrs",
  })
  @get()
  static getHqrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqr",
  })
  @post("{id}")
  static createHqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
