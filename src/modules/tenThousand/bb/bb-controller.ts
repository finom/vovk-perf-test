import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bb")
export default class BbController {
  @operation({
    summary: "Get Bb",
  })
  @get()
  static getBb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bb",
  })
  @post("{id}")
  static createBb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
