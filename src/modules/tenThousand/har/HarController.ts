import { procedure, prefix, get, post, operation } from "vovk";

@prefix("har")
export default class HarController {
  @operation({
    summary: "Get Har",
  })
  @get()
  static getHar = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Har",
  })
  @post("{id}")
  static createHar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
