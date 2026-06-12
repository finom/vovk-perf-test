import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ink")
export default class InkController {
  @operation({
    summary: "Get Ink",
  })
  @get()
  static getInk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ink",
  })
  @post("{id}")
  static createInk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
