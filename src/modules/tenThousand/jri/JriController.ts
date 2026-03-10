import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jri")
export default class JriController {
  @operation({
    summary: "Get Jri",
  })
  @get()
  static getJri = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jri",
  })
  @post("{id}")
  static createJri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
