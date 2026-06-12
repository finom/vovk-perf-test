import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emk")
export default class EmkController {
  @operation({
    summary: "Get Emk",
  })
  @get()
  static getEmk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emk",
  })
  @post("{id}")
  static createEmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
