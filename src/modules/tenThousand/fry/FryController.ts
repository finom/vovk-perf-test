import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fry")
export default class FryController {
  @operation({
    summary: "Get Fry",
  })
  @get()
  static getFry = procedure({
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
