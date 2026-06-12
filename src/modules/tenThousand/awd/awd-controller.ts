import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awd")
export default class AwdController {
  @operation({
    summary: "Get Awd",
  })
  @get()
  static getAwd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awd",
  })
  @post("{id}")
  static createAwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
