import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dice")
export default class DieController {
  @operation({
    summary: "Get Dice",
  })
  @get()
  static getDice = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Die",
  })
  @post("{id}")
  static createDie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
