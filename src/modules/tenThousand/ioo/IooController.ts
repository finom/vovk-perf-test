import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioo")
export default class IooController {
  @operation({
    summary: "Get Ioo",
  })
  @get()
  static getIoo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioo",
  })
  @post("{id}")
  static createIoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
