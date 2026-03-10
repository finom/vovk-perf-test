import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amk")
export default class AmkController {
  @operation({
    summary: "Get Amk",
  })
  @get()
  static getAmk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amk",
  })
  @post("{id}")
  static createAmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
