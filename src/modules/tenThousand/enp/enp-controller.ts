import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enp")
export default class EnpController {
  @operation({
    summary: "Get Enp",
  })
  @get()
  static getEnp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enp",
  })
  @post("{id}")
  static createEnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
