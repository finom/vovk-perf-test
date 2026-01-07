import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjn")
export default class HjnController {
  @operation({
    summary: "Get Hjn",
  })
  @get()
  static getHjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjn",
  })
  @post("{id}")
  static createHjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
