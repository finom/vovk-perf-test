import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqb")
export default class LqbController {
  @operation({
    summary: "Get Lqb",
  })
  @get()
  static getLqb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqb",
  })
  @post("{id}")
  static createLqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
