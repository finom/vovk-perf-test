import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcf")
export default class FcfController {
  @operation({
    summary: "Get Fcf",
  })
  @get()
  static getFcf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcf",
  })
  @post("{id}")
  static createFcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
