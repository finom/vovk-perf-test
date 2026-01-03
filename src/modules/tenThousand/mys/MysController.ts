import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mys")
export default class MysController {
  @operation({
    summary: "Get Mys",
  })
  @get()
  static getMys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mys",
  })
  @post("{id}")
  static createMys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
