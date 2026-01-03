import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjds")
export default class GjdController {
  @operation({
    summary: "Get Gjds",
  })
  @get()
  static getGjds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjd",
  })
  @post("{id}")
  static createGjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
