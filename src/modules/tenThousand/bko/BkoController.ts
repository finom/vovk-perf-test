import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bko")
export default class BkoController {
  @operation({
    summary: "Get Bko",
  })
  @get()
  static getBko = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bko",
  })
  @post("{id}")
  static createBko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
