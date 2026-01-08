import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dai")
export default class DaiController {
  @operation({
    summary: "Get Dai",
  })
  @get()
  static getDai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dai",
  })
  @post("{id}")
  static createDai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
