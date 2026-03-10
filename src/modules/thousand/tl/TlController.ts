import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tl")
export default class TlController {
  @operation({
    summary: "Get Tl",
  })
  @get()
  static getTl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tl",
  })
  @post("{id}")
  static createTl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
