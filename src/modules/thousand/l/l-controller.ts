import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("l")
export default class LController {
  @operation({
    summary: "Get L",
  })
  @get()
  static getL = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create L",
  })
  @post("{id}")
  static createL = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
