import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlb")
export default class JlbController {
  @operation({
    summary: "Get Jlb",
  })
  @get()
  static getJlb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlb",
  })
  @post("{id}")
  static createJlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
