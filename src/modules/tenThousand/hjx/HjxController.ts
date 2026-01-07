import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjx")
export default class HjxController {
  @operation({
    summary: "Get Hjx",
  })
  @get()
  static getHjx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjx",
  })
  @post("{id}")
  static createHjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
