import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wq")
export default class WqController {
  @operation({
    summary: "Get Wq",
  })
  @get()
  static getWq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wq",
  })
  @post("{id}")
  static createWq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
