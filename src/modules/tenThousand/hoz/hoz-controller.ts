import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoz")
export default class HozController {
  @operation({
    summary: "Get Hoz",
  })
  @get()
  static getHoz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hoz",
  })
  @post("{id}")
  static createHoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
