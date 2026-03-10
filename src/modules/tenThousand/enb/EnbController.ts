import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enb")
export default class EnbController {
  @operation({
    summary: "Get Enb",
  })
  @get()
  static getEnb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enb",
  })
  @post("{id}")
  static createEnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
