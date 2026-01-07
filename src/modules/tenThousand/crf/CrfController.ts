import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crf")
export default class CrfController {
  @operation({
    summary: "Get Crf",
  })
  @get()
  static getCrf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crf",
  })
  @post("{id}")
  static createCrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
