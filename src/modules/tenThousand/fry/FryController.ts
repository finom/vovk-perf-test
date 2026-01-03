import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fries")
export default class FryController {
  @operation({
    summary: "Get Fries",
  })
  @get()
  static getFries = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fry",
  })
  @post("{id}")
  static createFry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
