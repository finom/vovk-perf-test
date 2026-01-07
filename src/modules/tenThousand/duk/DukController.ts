import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duk")
export default class DukController {
  @operation({
    summary: "Get Duk",
  })
  @get()
  static getDuk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duk",
  })
  @post("{id}")
  static createDuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
