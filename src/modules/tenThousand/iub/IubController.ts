import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iubs")
export default class IubController {
  @operation({
    summary: "Get Iubs",
  })
  @get()
  static getIubs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iub",
  })
  @post("{id}")
  static createIub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
