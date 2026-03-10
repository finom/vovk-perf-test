import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("com")
export default class ComController {
  @operation({
    summary: "Get Com",
  })
  @get()
  static getCom = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Com",
  })
  @post("{id}")
  static createCom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
