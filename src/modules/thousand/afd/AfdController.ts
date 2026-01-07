import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afd")
export default class AfdController {
  @operation({
    summary: "Get Afd",
  })
  @get()
  static getAfd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afd",
  })
  @post("{id}")
  static createAfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
