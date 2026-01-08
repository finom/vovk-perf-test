import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muc")
export default class MucController {
  @operation({
    summary: "Get Muc",
  })
  @get()
  static getMuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muc",
  })
  @post("{id}")
  static createMuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
