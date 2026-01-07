import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dou")
export default class DouController {
  @operation({
    summary: "Get Dou",
  })
  @get()
  static getDou = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dou",
  })
  @post("{id}")
  static createDou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
