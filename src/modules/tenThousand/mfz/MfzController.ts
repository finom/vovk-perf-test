import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfzs")
export default class MfzController {
  @operation({
    summary: "Get Mfzs",
  })
  @get()
  static getMfzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfz",
  })
  @post("{id}")
  static createMfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
