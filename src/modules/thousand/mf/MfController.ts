import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mf")
export default class MfController {
  @operation({
    summary: "Get Mf",
  })
  @get()
  static getMf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mf",
  })
  @post("{id}")
  static createMf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
