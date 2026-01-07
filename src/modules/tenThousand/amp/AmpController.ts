import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amp")
export default class AmpController {
  @operation({
    summary: "Get Amp",
  })
  @get()
  static getAmp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amp",
  })
  @post("{id}")
  static createAmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
