import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhn")
export default class JhnController {
  @operation({
    summary: "Get Jhn",
  })
  @get()
  static getJhn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhn",
  })
  @post("{id}")
  static createJhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
