import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bym")
export default class BymController {
  @operation({
    summary: "Get Bym",
  })
  @get()
  static getBym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bym",
  })
  @post("{id}")
  static createBym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
