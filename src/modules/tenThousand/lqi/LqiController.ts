import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqi")
export default class LqiController {
  @operation({
    summary: "Get Lqi",
  })
  @get()
  static getLqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqi",
  })
  @post("{id}")
  static createLqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
