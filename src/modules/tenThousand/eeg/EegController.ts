import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eegs")
export default class EegController {
  @operation({
    summary: "Get Eegs",
  })
  @get()
  static getEegs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eeg",
  })
  @post("{id}")
  static createEeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
