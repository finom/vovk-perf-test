import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnh")
export default class BnhController {
  @operation({
    summary: "Get Bnh",
  })
  @get()
  static getBnh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnh",
  })
  @post("{id}")
  static createBnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
