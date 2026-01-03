import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doqs")
export default class DoqController {
  @operation({
    summary: "Get Doqs",
  })
  @get()
  static getDoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doq",
  })
  @post("{id}")
  static createDoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
