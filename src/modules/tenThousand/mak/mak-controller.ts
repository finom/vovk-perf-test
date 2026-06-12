import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mak")
export default class MakController {
  @operation({
    summary: "Get Mak",
  })
  @get()
  static getMak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mak",
  })
  @post("{id}")
  static createMak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
