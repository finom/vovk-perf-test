import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivc")
export default class IvcController {
  @operation({
    summary: "Get Ivc",
  })
  @get()
  static getIvc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivc",
  })
  @post("{id}")
  static createIvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
