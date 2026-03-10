import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqz")
export default class LqzController {
  @operation({
    summary: "Get Lqz",
  })
  @get()
  static getLqz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqz",
  })
  @post("{id}")
  static createLqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
