import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("th")
export default class ThController {
  @operation({
    summary: "Get Th",
  })
  @get()
  static getTh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Th",
  })
  @post("{id}")
  static createTh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
