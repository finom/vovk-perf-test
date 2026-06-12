import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mus")
export default class MusController {
  @operation({
    summary: "Get Mus",
  })
  @get()
  static getMus = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mus",
  })
  @post("{id}")
  static createMus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
