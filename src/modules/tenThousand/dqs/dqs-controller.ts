import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqs")
export default class DqsController {
  @operation({
    summary: "Get Dqs",
  })
  @get()
  static getDqs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dqs",
  })
  @post("{id}")
  static createDqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
