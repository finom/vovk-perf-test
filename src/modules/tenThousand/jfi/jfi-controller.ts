import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfi")
export default class JfiController {
  @operation({
    summary: "Get Jfi",
  })
  @get()
  static getJfi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfi",
  })
  @post("{id}")
  static createJfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
