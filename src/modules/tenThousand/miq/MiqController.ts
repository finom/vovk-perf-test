import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miq")
export default class MiqController {
  @operation({
    summary: "Get Miq",
  })
  @get()
  static getMiq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Miq",
  })
  @post("{id}")
  static createMiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
