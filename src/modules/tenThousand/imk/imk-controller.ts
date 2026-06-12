import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imk")
export default class ImkController {
  @operation({
    summary: "Get Imk",
  })
  @get()
  static getImk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imk",
  })
  @post("{id}")
  static createImk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
