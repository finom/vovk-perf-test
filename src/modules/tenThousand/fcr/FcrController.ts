import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcr")
export default class FcrController {
  @operation({
    summary: "Get Fcr",
  })
  @get()
  static getFcr = procedure({
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
