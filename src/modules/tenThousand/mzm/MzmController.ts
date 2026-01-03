import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzms")
export default class MzmController {
  @operation({
    summary: "Get Mzms",
  })
  @get()
  static getMzms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzm",
  })
  @post("{id}")
  static createMzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
