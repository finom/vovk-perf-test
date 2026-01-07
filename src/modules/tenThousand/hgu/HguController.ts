import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgu")
export default class HguController {
  @operation({
    summary: "Get Hgu",
  })
  @get()
  static getHgu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgu",
  })
  @post("{id}")
  static createHgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
