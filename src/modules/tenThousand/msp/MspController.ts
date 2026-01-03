import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msps")
export default class MspController {
  @operation({
    summary: "Get Msps",
  })
  @get()
  static getMsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msp",
  })
  @post("{id}")
  static createMsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
