import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnh")
export default class GnhController {
  @operation({
    summary: "Get Gnh",
  })
  @get()
  static getGnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnh",
  })
  @post("{id}")
  static createGnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
