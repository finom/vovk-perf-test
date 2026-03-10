import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aby")
export default class AbyController {
  @operation({
    summary: "Get Aby",
  })
  @get()
  static getAby = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aby",
  })
  @post("{id}")
  static createAby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
