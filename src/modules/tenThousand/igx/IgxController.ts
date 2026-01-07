import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igx")
export default class IgxController {
  @operation({
    summary: "Get Igx",
  })
  @get()
  static getIgx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igx",
  })
  @post("{id}")
  static createIgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
