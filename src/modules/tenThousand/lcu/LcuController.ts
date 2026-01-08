import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcu")
export default class LcuController {
  @operation({
    summary: "Get Lcu",
  })
  @get()
  static getLcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcu",
  })
  @post("{id}")
  static createLcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
