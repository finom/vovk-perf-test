import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mums")
export default class MumController {
  @operation({
    summary: "Get Mums",
  })
  @get()
  static getMums = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mum",
  })
  @post("{id}")
  static createMum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
