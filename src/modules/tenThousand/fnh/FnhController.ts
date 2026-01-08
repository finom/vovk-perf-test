import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnh")
export default class FnhController {
  @operation({
    summary: "Get Fnh",
  })
  @get()
  static getFnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnh",
  })
  @post("{id}")
  static createFnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
