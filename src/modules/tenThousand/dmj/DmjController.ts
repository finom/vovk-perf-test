import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmj")
export default class DmjController {
  @operation({
    summary: "Get Dmj",
  })
  @get()
  static getDmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmj",
  })
  @post("{id}")
  static createDmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
