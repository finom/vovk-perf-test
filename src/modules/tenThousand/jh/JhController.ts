import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jh")
export default class JhController {
  @operation({
    summary: "Get Jh",
  })
  @get()
  static getJh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jh",
  })
  @post("{id}")
  static createJh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
