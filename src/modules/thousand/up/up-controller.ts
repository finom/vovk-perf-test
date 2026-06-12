import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("up")
export default class UpController {
  @operation({
    summary: "Get Up",
  })
  @get()
  static getUp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Up",
  })
  @post("{id}")
  static createUp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
