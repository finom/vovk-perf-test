import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fje")
export default class FjeController {
  @operation({
    summary: "Get Fje",
  })
  @get()
  static getFje = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fje",
  })
  @post("{id}")
  static createFje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
