import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbh")
export default class LbhController {
  @operation({
    summary: "Get Lbh",
  })
  @get()
  static getLbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbh",
  })
  @post("{id}")
  static createLbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
