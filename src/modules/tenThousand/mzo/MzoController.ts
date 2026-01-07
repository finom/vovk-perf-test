import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzo")
export default class MzoController {
  @operation({
    summary: "Get Mzo",
  })
  @get()
  static getMzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzo",
  })
  @post("{id}")
  static createMzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
