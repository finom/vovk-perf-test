import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hacs")
export default class HacController {
  @operation({
    summary: "Get Hacs",
  })
  @get()
  static getHacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hac",
  })
  @post("{id}")
  static createHac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
