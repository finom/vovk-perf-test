import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrzs")
export default class MrzController {
  @operation({
    summary: "Get Mrzs",
  })
  @get()
  static getMrzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrz",
  })
  @post("{id}")
  static createMrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
