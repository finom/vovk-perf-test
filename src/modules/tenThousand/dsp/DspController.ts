import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsp")
export default class DspController {
  @operation({
    summary: "Get Dsp",
  })
  @get()
  static getDsp = procedure({
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
