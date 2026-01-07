import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emj")
export default class EmjController {
  @operation({
    summary: "Get Emj",
  })
  @get()
  static getEmj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emj",
  })
  @post("{id}")
  static createEmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
