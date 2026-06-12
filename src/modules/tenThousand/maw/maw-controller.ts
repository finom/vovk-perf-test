import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("maw")
export default class MawController {
  @operation({
    summary: "Get Maw",
  })
  @get()
  static getMaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Maw",
  })
  @post("{id}")
  static createMaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
