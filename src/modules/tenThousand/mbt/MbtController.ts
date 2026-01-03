import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbts")
export default class MbtController {
  @operation({
    summary: "Get Mbts",
  })
  @get()
  static getMbts = procedure({
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
