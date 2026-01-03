import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hibs")
export default class HibController {
  @operation({
    summary: "Get Hibs",
  })
  @get()
  static getHibs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hib",
  })
  @post("{id}")
  static createHib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
