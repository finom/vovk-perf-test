import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amk")
export default class AmkController {
  @operation({
    summary: "Get Amk",
  })
  @get()
  static getAmk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amk",
  })
  @post("{id}")
  static createAmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
