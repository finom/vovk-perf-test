import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnes")
export default class MneController {
  @operation({
    summary: "Get Mnes",
  })
  @get()
  static getMnes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mne",
  })
  @post("{id}")
  static createMne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
