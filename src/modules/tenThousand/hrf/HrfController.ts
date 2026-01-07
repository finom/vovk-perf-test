import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrf")
export default class HrfController {
  @operation({
    summary: "Get Hrf",
  })
  @get()
  static getHrf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrf",
  })
  @post("{id}")
  static createHrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
