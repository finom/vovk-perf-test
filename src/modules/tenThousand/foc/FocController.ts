import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foc")
export default class FocController {
  @operation({
    summary: "Get Foc",
  })
  @get()
  static getFoc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foc",
  })
  @post("{id}")
  static createFoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
