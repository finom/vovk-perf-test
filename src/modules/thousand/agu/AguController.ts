import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agu")
export default class AguController {
  @operation({
    summary: "Get Agu",
  })
  @get()
  static getAgu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agu",
  })
  @post("{id}")
  static createAgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
