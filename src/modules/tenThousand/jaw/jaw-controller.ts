import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jaw")
export default class JawController {
  @operation({
    summary: "Get Jaw",
  })
  @get()
  static getJaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jaw",
  })
  @post("{id}")
  static createJaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
