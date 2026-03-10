import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxi")
export default class JxiController {
  @operation({
    summary: "Get Jxi",
  })
  @get()
  static getJxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxi",
  })
  @post("{id}")
  static createJxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
