import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbt")
export default class MbtController {
  @operation({
    summary: "Get Mbt",
  })
  @get()
  static getMbt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbt",
  })
  @post("{id}")
  static createMbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
