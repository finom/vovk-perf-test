import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrh")
export default class MrhController {
  @operation({
    summary: "Get Mrh",
  })
  @get()
  static getMrh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrh",
  })
  @post("{id}")
  static createMrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
