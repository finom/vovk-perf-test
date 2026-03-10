import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfq")
export default class HfqController {
  @operation({
    summary: "Get Hfq",
  })
  @get()
  static getHfq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfq",
  })
  @post("{id}")
  static createHfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
