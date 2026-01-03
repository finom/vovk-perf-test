import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsvs")
export default class FsvController {
  @operation({
    summary: "Get Fsvs",
  })
  @get()
  static getFsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsv",
  })
  @post("{id}")
  static createFsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
