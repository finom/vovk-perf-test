import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mr")
export default class MrController {
  @operation({
    summary: "Get Mr",
  })
  @get()
  static getMr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mr",
  })
  @post("{id}")
  static createMr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
