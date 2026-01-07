import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyf")
export default class IyfController {
  @operation({
    summary: "Get Iyf",
  })
  @get()
  static getIyf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyf",
  })
  @post("{id}")
  static createIyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
