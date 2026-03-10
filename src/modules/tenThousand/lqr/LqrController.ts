import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqr")
export default class LqrController {
  @operation({
    summary: "Get Lqr",
  })
  @get()
  static getLqr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqr",
  })
  @post("{id}")
  static createLqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
