import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mads")
export default class MadController {
  @operation({
    summary: "Get Mads",
  })
  @get()
  static getMads = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mad",
  })
  @post("{id}")
  static createMad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
