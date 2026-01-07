import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvu")
export default class FvuController {
  @operation({
    summary: "Get Fvu",
  })
  @get()
  static getFvu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvu",
  })
  @post("{id}")
  static createFvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
