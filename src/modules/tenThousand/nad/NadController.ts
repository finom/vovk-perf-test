import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nads")
export default class NadController {
  @operation({
    summary: "Get Nads",
  })
  @get()
  static getNads = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nad",
  })
  @post("{id}")
  static createNad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
