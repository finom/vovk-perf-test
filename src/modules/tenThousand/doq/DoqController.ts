import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doq")
export default class DoqController {
  @operation({
    summary: "Get Doq",
  })
  @get()
  static getDoq = procedure({
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
