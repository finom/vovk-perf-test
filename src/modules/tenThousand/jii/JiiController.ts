import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jii")
export default class JiiController {
  @operation({
    summary: "Get Jii",
  })
  @get()
  static getJii = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jii",
  })
  @post("{id}")
  static createJii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
