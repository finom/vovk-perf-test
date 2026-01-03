import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsps")
export default class DspController {
  @operation({
    summary: "Get Dsps",
  })
  @get()
  static getDsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsp",
  })
  @post("{id}")
  static createDsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
