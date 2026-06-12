import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aeb")
export default class AebController {
  @operation({
    summary: "Get Aeb",
  })
  @get()
  static getAeb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aeb",
  })
  @post("{id}")
  static createAeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
