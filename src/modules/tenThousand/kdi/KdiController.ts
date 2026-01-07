import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdi")
export default class KdiController {
  @operation({
    summary: "Get Kdi",
  })
  @get()
  static getKdi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdi",
  })
  @post("{id}")
  static createKdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
