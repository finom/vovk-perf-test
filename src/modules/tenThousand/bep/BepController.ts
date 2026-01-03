import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beps")
export default class BepController {
  @operation({
    summary: "Get Beps",
  })
  @get()
  static getBeps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bep",
  })
  @post("{id}")
  static createBep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
