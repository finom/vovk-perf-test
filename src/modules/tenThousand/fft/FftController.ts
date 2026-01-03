import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffts")
export default class FftController {
  @operation({
    summary: "Get Ffts",
  })
  @get()
  static getFfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fft",
  })
  @post("{id}")
  static createFft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
