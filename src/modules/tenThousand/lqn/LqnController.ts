import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqn")
export default class LqnController {
  @operation({
    summary: "Get Lqn",
  })
  @get()
  static getLqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqn",
  })
  @post("{id}")
  static createLqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
