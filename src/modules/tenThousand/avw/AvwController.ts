import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avws")
export default class AvwController {
  @operation({
    summary: "Get Avws",
  })
  @get()
  static getAvws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avw",
  })
  @post("{id}")
  static createAvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
