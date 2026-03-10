import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyq")
export default class JyqController {
  @operation({
    summary: "Get Jyq",
  })
  @get()
  static getJyq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyq",
  })
  @post("{id}")
  static createJyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
