import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mec")
export default class MecController {
  @operation({
    summary: "Get Mec",
  })
  @get()
  static getMec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mec",
  })
  @post("{id}")
  static createMec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
