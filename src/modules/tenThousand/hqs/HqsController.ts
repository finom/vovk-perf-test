import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqs")
export default class HqsController {
  @operation({
    summary: "Get Hqs",
  })
  @get()
  static getHqs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqs",
  })
  @post("{id}")
  static createHqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
