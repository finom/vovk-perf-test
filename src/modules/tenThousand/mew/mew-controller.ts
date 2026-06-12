import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mew")
export default class MewController {
  @operation({
    summary: "Get Mew",
  })
  @get()
  static getMew = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mew",
  })
  @post("{id}")
  static createMew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
