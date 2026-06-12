import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apq")
export default class ApqController {
  @operation({
    summary: "Get Apq",
  })
  @get()
  static getApq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Apq",
  })
  @post("{id}")
  static createApq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
