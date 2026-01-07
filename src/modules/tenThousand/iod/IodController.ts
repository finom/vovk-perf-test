import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iod")
export default class IodController {
  @operation({
    summary: "Get Iod",
  })
  @get()
  static getIod = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iod",
  })
  @post("{id}")
  static createIod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
