import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcrs")
export default class FcrController {
  @operation({
    summary: "Get Fcrs",
  })
  @get()
  static getFcrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcr",
  })
  @post("{id}")
  static createFcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
