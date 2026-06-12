import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mir")
export default class MirController {
  @operation({
    summary: "Get Mir",
  })
  @get()
  static getMir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mir",
  })
  @post("{id}")
  static createMir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
