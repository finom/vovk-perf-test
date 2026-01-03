import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivcs")
export default class IvcController {
  @operation({
    summary: "Get Ivcs",
  })
  @get()
  static getIvcs = procedure({
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
