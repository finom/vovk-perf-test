import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xn")
export default class XnController {
  @operation({
    summary: "Get Xn",
  })
  @get()
  static getXn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xn",
  })
  @post("{id}")
  static createXn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
