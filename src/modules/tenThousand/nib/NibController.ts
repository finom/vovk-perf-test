import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nib")
export default class NibController {
  @operation({
    summary: "Get Nib",
  })
  @get()
  static getNib = procedure({
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
