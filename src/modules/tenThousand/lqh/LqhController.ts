import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqh")
export default class LqhController {
  @operation({
    summary: "Get Lqh",
  })
  @get()
  static getLqh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqh",
  })
  @post("{id}")
  static createLqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
