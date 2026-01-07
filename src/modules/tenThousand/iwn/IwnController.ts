import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwn")
export default class IwnController {
  @operation({
    summary: "Get Iwn",
  })
  @get()
  static getIwn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwn",
  })
  @post("{id}")
  static createIwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
