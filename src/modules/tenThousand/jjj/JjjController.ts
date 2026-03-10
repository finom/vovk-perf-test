import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjj")
export default class JjjController {
  @operation({
    summary: "Get Jjj",
  })
  @get()
  static getJjj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjj",
  })
  @post("{id}")
  static createJjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
