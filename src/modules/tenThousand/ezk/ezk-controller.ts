import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezk")
export default class EzkController {
  @operation({
    summary: "Get Ezk",
  })
  @get()
  static getEzk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ezk",
  })
  @post("{id}")
  static createEzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
