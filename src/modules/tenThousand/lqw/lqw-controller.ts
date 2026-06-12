import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqw")
export default class LqwController {
  @operation({
    summary: "Get Lqw",
  })
  @get()
  static getLqw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqw",
  })
  @post("{id}")
  static createLqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
