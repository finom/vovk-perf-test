import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijd")
export default class IjdController {
  @operation({
    summary: "Get Ijd",
  })
  @get()
  static getIjd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijd",
  })
  @post("{id}")
  static createIjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
