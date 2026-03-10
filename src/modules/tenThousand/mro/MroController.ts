import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mro")
export default class MroController {
  @operation({
    summary: "Get Mro",
  })
  @get()
  static getMro = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mro",
  })
  @post("{id}")
  static createMro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
