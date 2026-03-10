import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mon")
export default class MonController {
  @operation({
    summary: "Get Mon",
  })
  @get()
  static getMon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mon",
  })
  @post("{id}")
  static createMon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
