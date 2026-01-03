import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fygs")
export default class FygController {
  @operation({
    summary: "Get Fygs",
  })
  @get()
  static getFygs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyg",
  })
  @post("{id}")
  static createFyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
