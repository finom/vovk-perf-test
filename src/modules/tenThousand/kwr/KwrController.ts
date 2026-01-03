import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwrs")
export default class KwrController {
  @operation({
    summary: "Get Kwrs",
  })
  @get()
  static getKwrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwr",
  })
  @post("{id}")
  static createKwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
