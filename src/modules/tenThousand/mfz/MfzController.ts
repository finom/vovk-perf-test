import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfz")
export default class MfzController {
  @operation({
    summary: "Get Mfz",
  })
  @get()
  static getMfz = procedure({
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
