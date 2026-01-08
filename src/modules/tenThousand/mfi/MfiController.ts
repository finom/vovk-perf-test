import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfi")
export default class MfiController {
  @operation({
    summary: "Get Mfi",
  })
  @get()
  static getMfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfi",
  })
  @post("{id}")
  static createMfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
