import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gk")
export default class GkController {
  @operation({
    summary: "Get Gk",
  })
  @get()
  static getGk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gk",
  })
  @post("{id}")
  static createGk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
