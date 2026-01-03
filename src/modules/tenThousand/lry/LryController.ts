import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lries")
export default class LryController {
  @operation({
    summary: "Get Lries",
  })
  @get()
  static getLries = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lry",
  })
  @post("{id}")
  static createLry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
