import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvus")
export default class MvuController {
  @operation({
    summary: "Get Mvus",
  })
  @get()
  static getMvus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvu",
  })
  @post("{id}")
  static createMvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
