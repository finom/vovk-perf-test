import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfh")
export default class MfhController {
  @operation({
    summary: "Get Mfh",
  })
  @get()
  static getMfh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfh",
  })
  @post("{id}")
  static createMfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
