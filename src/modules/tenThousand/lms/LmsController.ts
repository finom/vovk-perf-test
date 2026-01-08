import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lms")
export default class LmsController {
  @operation({
    summary: "Get Lms",
  })
  @get()
  static getLms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lms",
  })
  @post("{id}")
  static createLms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
