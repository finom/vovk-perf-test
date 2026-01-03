import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddjs")
export default class DdjController {
  @operation({
    summary: "Get Ddjs",
  })
  @get()
  static getDdjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddj",
  })
  @post("{id}")
  static createDdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
