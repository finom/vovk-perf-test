import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ame")
export default class AmeController {
  @operation({
    summary: "Get Ame",
  })
  @get()
  static getAme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ame",
  })
  @post("{id}")
  static createAme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
