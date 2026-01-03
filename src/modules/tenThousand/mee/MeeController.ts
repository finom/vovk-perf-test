import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mees")
export default class MeeController {
  @operation({
    summary: "Get Mees",
  })
  @get()
  static getMees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mee",
  })
  @post("{id}")
  static createMee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
