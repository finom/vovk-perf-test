import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azk")
export default class AzkController {
  @operation({
    summary: "Get Azk",
  })
  @get()
  static getAzk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Azk",
  })
  @post("{id}")
  static createAzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
