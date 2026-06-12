import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jag")
export default class JagController {
  @operation({
    summary: "Get Jag",
  })
  @get()
  static getJag = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jag",
  })
  @post("{id}")
  static createJag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
