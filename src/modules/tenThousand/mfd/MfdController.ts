import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfd")
export default class MfdController {
  @operation({
    summary: "Get Mfd",
  })
  @get()
  static getMfd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfd",
  })
  @post("{id}")
  static createMfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
