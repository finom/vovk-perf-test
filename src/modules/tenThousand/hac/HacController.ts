import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hac")
export default class HacController {
  @operation({
    summary: "Get Hac",
  })
  @get()
  static getHac = procedure({
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
