import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnh")
export default class JnhController {
  @operation({
    summary: "Get Jnh",
  })
  @get()
  static getJnh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnh",
  })
  @post("{id}")
  static createJnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
