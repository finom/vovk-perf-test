import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mai")
export default class MaiController {
  @operation({
    summary: "Get Mai",
  })
  @get()
  static getMai = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mai",
  })
  @post("{id}")
  static createMai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
