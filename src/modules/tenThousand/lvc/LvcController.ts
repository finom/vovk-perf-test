import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvc")
export default class LvcController {
  @operation({
    summary: "Get Lvc",
  })
  @get()
  static getLvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvc",
  })
  @post("{id}")
  static createLvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
