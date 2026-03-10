import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjn")
export default class HjnController {
  @operation({
    summary: "Get Hjn",
  })
  @get()
  static getHjn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hjn",
  })
  @post("{id}")
  static createHjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
