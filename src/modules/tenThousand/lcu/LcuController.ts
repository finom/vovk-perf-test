import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcu")
export default class LcuController {
  @operation({
    summary: "Get Lcu",
  })
  @get()
  static getLcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcu",
  })
  @post("{id}")
  static createLcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
