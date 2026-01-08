import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fk")
export default class FkController {
  @operation({
    summary: "Get Fk",
  })
  @get()
  static getFk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fk",
  })
  @post("{id}")
  static createFk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
