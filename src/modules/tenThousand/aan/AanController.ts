import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aans")
export default class AanController {
  @operation({
    summary: "Get Aans",
  })
  @get()
  static getAans = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aan",
  })
  @post("{id}")
  static createAan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
