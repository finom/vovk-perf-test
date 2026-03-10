import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joh")
export default class JohController {
  @operation({
    summary: "Get Joh",
  })
  @get()
  static getJoh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Joh",
  })
  @post("{id}")
  static createJoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
