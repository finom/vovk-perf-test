import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnhs")
export default class MnhController {
  @operation({
    summary: "Get Mnhs",
  })
  @get()
  static getMnhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnh",
  })
  @post("{id}")
  static createMnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
