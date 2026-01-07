import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lct")
export default class LctController {
  @operation({
    summary: "Get Lct",
  })
  @get()
  static getLct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lct",
  })
  @post("{id}")
  static createLct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
