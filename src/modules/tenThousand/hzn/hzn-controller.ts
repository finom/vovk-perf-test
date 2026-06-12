import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzn")
export default class HznController {
  @operation({
    summary: "Get Hzn",
  })
  @get()
  static getHzn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzn",
  })
  @post("{id}")
  static createHzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
