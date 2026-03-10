import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mo")
export default class MoController {
  @operation({
    summary: "Get Mo",
  })
  @get()
  static getMo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mo",
  })
  @post("{id}")
  static createMo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
