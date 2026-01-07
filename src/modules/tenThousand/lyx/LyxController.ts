import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyx")
export default class LyxController {
  @operation({
    summary: "Get Lyx",
  })
  @get()
  static getLyx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyx",
  })
  @post("{id}")
  static createLyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
