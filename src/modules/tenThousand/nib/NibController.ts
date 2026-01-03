import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nibs")
export default class NibController {
  @operation({
    summary: "Get Nibs",
  })
  @get()
  static getNibs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nib",
  })
  @post("{id}")
  static createNib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
