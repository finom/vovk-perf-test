import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aacs")
export default class AacController {
  @operation({
    summary: "Get Aacs",
  })
  @get()
  static getAacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aac",
  })
  @post("{id}")
  static createAac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
