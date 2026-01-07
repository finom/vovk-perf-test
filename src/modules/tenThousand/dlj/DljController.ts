import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlj")
export default class DljController {
  @operation({
    summary: "Get Dlj",
  })
  @get()
  static getDlj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlj",
  })
  @post("{id}")
  static createDlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
