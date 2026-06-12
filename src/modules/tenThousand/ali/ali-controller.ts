import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ali")
export default class AliController {
  @operation({
    summary: "Get Ali",
  })
  @get()
  static getAli = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ali",
  })
  @post("{id}")
  static createAli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
