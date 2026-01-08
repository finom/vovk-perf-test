import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ao")
export default class AoController {
  @operation({
    summary: "Get Ao",
  })
  @get()
  static getAo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ao",
  })
  @post("{id}")
  static createAo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
