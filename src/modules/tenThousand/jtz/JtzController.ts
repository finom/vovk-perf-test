import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtz")
export default class JtzController {
  @operation({
    summary: "Get Jtz",
  })
  @get()
  static getJtz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtz",
  })
  @post("{id}")
  static createJtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
