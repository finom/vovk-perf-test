import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnh")
export default class GnhController {
  @operation({
    summary: "Get Gnh",
  })
  @get()
  static getGnh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnh",
  })
  @post("{id}")
  static createGnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
