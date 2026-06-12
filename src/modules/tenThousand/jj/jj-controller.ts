import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jj")
export default class JjController {
  @operation({
    summary: "Get Jj",
  })
  @get()
  static getJj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jj",
  })
  @post("{id}")
  static createJj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
