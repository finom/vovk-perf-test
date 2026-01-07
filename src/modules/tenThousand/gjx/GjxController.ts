import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjx")
export default class GjxController {
  @operation({
    summary: "Get Gjx",
  })
  @get()
  static getGjx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjx",
  })
  @post("{id}")
  static createGjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
