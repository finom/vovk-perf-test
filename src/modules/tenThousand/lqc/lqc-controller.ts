import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqc")
export default class LqcController {
  @operation({
    summary: "Get Lqc",
  })
  @get()
  static getLqc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqc",
  })
  @post("{id}")
  static createLqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
