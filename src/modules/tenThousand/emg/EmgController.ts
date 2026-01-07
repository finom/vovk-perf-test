import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emg")
export default class EmgController {
  @operation({
    summary: "Get Emg",
  })
  @get()
  static getEmg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emg",
  })
  @post("{id}")
  static createEmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
