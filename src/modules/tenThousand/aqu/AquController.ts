import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqu")
export default class AquController {
  @operation({
    summary: "Get Aqu",
  })
  @get()
  static getAqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqu",
  })
  @post("{id}")
  static createAqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
