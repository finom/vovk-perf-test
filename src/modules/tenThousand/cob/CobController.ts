import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cobs")
export default class CobController {
  @operation({
    summary: "Get Cobs",
  })
  @get()
  static getCobs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cob",
  })
  @post("{id}")
  static createCob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
