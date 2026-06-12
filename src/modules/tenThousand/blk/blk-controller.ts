import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blk")
export default class BlkController {
  @operation({
    summary: "Get Blk",
  })
  @get()
  static getBlk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blk",
  })
  @post("{id}")
  static createBlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
