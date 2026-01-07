import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddi")
export default class DdiController {
  @operation({
    summary: "Get Ddi",
  })
  @get()
  static getDdi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddi",
  })
  @post("{id}")
  static createDdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
