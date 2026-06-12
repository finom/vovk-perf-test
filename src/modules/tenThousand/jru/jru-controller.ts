import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jru")
export default class JruController {
  @operation({
    summary: "Get Jru",
  })
  @get()
  static getJru = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jru",
  })
  @post("{id}")
  static createJru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
