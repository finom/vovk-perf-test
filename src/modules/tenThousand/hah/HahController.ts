import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hah")
export default class HahController {
  @operation({
    summary: "Get Hah",
  })
  @get()
  static getHah = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hah",
  })
  @post("{id}")
  static createHah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
