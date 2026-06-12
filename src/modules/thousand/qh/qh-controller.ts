import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qh")
export default class QhController {
  @operation({
    summary: "Get Qh",
  })
  @get()
  static getQh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qh",
  })
  @post("{id}")
  static createQh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
