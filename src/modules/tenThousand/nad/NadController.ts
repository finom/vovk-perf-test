import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nad")
export default class NadController {
  @operation({
    summary: "Get Nad",
  })
  @get()
  static getNad = procedure({
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
