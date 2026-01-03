import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apus")
export default class ApuController {
  @operation({
    summary: "Get Apus",
  })
  @get()
  static getApus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apu",
  })
  @post("{id}")
  static createApu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
