import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjl")
export default class MjlController {
  @operation({
    summary: "Get Mjl",
  })
  @get()
  static getMjl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mjl",
  })
  @post("{id}")
  static createMjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
