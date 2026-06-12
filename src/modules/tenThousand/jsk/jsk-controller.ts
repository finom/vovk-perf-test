import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsk")
export default class JskController {
  @operation({
    summary: "Get Jsk",
  })
  @get()
  static getJsk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jsk",
  })
  @post("{id}")
  static createJsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
