import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qts")
export default class QtController {
  @operation({
    summary: "Get Qts",
  })
  @get()
  static getQts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qt",
  })
  @post("{id}")
  static createQt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
