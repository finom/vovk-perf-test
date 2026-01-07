import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nak")
export default class NakController {
  @operation({
    summary: "Get Nak",
  })
  @get()
  static getNak = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nak",
  })
  @post("{id}")
  static createNak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
