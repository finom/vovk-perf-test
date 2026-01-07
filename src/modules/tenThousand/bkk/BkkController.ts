import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkk")
export default class BkkController {
  @operation({
    summary: "Get Bkk",
  })
  @get()
  static getBkk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkk",
  })
  @post("{id}")
  static createBkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
