import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfj")
export default class JfjController {
  @operation({
    summary: "Get Jfj",
  })
  @get()
  static getJfj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfj",
  })
  @post("{id}")
  static createJfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
