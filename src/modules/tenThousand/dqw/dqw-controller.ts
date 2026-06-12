import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqw")
export default class DqwController {
  @operation({
    summary: "Get Dqw",
  })
  @get()
  static getDqw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dqw",
  })
  @post("{id}")
  static createDqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
