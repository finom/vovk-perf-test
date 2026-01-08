import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpm")
export default class FpmController {
  @operation({
    summary: "Get Fpm",
  })
  @get()
  static getFpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpm",
  })
  @post("{id}")
  static createFpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
