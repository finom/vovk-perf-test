import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfds")
export default class MfdController {
  @operation({
    summary: "Get Mfds",
  })
  @get()
  static getMfds = procedure({
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
