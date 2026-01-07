import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoc")
export default class HocController {
  @operation({
    summary: "Get Hoc",
  })
  @get()
  static getHoc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoc",
  })
  @post("{id}")
  static createHoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
