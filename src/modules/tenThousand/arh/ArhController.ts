import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arh")
export default class ArhController {
  @operation({
    summary: "Get Arh",
  })
  @get()
  static getArh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arh",
  })
  @post("{id}")
  static createArh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
