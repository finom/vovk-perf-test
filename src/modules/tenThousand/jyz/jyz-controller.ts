import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyz")
export default class JyzController {
  @operation({
    summary: "Get Jyz",
  })
  @get()
  static getJyz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyz",
  })
  @post("{id}")
  static createJyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
