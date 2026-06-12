import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mss")
export default class MssController {
  @operation({
    summary: "Get Mss",
  })
  @get()
  static getMss = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mss",
  })
  @post("{id}")
  static createMss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
