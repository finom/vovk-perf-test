import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noys")
export default class NoyController {
  @operation({
    summary: "Get Noys",
  })
  @get()
  static getNoys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noy",
  })
  @post("{id}")
  static createNoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
