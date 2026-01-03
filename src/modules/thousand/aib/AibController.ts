import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aibs")
export default class AibController {
  @operation({
    summary: "Get Aibs",
  })
  @get()
  static getAibs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aib",
  })
  @post("{id}")
  static createAib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
