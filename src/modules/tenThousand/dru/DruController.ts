import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dru")
export default class DruController {
  @operation({
    summary: "Get Dru",
  })
  @get()
  static getDru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dru",
  })
  @post("{id}")
  static createDru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
