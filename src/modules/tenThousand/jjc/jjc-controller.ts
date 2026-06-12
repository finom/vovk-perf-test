import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjc")
export default class JjcController {
  @operation({
    summary: "Get Jjc",
  })
  @get()
  static getJjc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjc",
  })
  @post("{id}")
  static createJjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
