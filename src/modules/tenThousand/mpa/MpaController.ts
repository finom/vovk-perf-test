import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpa")
export default class MpaController {
  @operation({
    summary: "Get Mpa",
  })
  @get()
  static getMpa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpa",
  })
  @post("{id}")
  static createMpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
