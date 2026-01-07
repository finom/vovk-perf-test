import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvu")
export default class MvuController {
  @operation({
    summary: "Get Mvu",
  })
  @get()
  static getMvu = procedure({
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
