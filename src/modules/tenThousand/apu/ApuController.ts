import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apu")
export default class ApuController {
  @operation({
    summary: "Get Apu",
  })
  @get()
  static getApu = procedure({
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
