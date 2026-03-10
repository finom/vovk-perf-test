import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("miu")
export default class MiuController {
  @operation({
    summary: "Get Miu",
  })
  @get()
  static getMiu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Miu",
  })
  @post("{id}")
  static createMiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
