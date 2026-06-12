import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqx")
export default class LqxController {
  @operation({
    summary: "Get Lqx",
  })
  @get()
  static getLqx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqx",
  })
  @post("{id}")
  static createLqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
