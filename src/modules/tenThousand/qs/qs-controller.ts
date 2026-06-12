import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qs")
export default class QsController {
  @operation({
    summary: "Get Qs",
  })
  @get()
  static getQs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qs",
  })
  @post("{id}")
  static createQs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
