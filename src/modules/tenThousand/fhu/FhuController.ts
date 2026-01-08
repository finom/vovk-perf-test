import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhu")
export default class FhuController {
  @operation({
    summary: "Get Fhu",
  })
  @get()
  static getFhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhu",
  })
  @post("{id}")
  static createFhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
