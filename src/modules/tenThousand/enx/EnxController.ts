import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enx")
export default class EnxController {
  @operation({
    summary: "Get Enx",
  })
  @get()
  static getEnx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enx",
  })
  @post("{id}")
  static createEnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
