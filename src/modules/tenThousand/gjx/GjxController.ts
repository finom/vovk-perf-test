import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjxes")
export default class GjxController {
  @operation({
    summary: "Get Gjxes",
  })
  @get()
  static getGjxes = procedure({
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
