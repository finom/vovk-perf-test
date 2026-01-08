import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjd")
export default class MjdController {
  @operation({
    summary: "Get Mjd",
  })
  @get()
  static getMjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjd",
  })
  @post("{id}")
  static createMjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
