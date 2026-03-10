import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hot")
export default class HotController {
  @operation({
    summary: "Get Hot",
  })
  @get()
  static getHot = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hot",
  })
  @post("{id}")
  static createHot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
