import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loz")
export default class LozController {
  @operation({
    summary: "Get Loz",
  })
  @get()
  static getLoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loz",
  })
  @post("{id}")
  static createLoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
