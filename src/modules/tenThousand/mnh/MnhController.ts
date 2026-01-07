import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnh")
export default class MnhController {
  @operation({
    summary: "Get Mnh",
  })
  @get()
  static getMnh = procedure({
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
