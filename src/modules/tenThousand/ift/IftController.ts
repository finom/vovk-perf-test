import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ift")
export default class IftController {
  @operation({
    summary: "Get Ift",
  })
  @get()
  static getIft = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ift",
  })
  @post("{id}")
  static createIft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
