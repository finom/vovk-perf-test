import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jov")
export default class JovController {
  @operation({
    summary: "Get Jov",
  })
  @get()
  static getJov = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jov",
  })
  @post("{id}")
  static createJov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
