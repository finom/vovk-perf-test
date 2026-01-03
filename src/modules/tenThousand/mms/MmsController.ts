import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mms")
export default class MmsController {
  @operation({
    summary: "Get Mms",
  })
  @get()
  static getMms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mms",
  })
  @post("{id}")
  static createMms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
