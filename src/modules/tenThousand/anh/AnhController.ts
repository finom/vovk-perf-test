import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anh")
export default class AnhController {
  @operation({
    summary: "Get Anh",
  })
  @get()
  static getAnh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anh",
  })
  @post("{id}")
  static createAnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
