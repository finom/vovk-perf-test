import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bries")
export default class BryController {
  @operation({
    summary: "Get Bries",
  })
  @get()
  static getBries = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bry",
  })
  @post("{id}")
  static createBry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
