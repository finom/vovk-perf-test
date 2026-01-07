import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arr")
export default class ArrController {
  @operation({
    summary: "Get Arr",
  })
  @get()
  static getArr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arr",
  })
  @post("{id}")
  static createArr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
