import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyx")
export default class LyxController {
  @operation({
    summary: "Get Lyx",
  })
  @get()
  static getLyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyx",
  })
  @post("{id}")
  static createLyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
