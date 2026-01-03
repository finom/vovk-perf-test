import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijds")
export default class IjdController {
  @operation({
    summary: "Get Ijds",
  })
  @get()
  static getIjds = procedure({
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
