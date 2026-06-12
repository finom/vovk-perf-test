import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chs")
export default class ChsController {
  @operation({
    summary: "Get Chs",
  })
  @get()
  static getChs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chs",
  })
  @post("{id}")
  static createChs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
