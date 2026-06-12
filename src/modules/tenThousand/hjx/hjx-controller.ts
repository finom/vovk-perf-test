import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjx")
export default class HjxController {
  @operation({
    summary: "Get Hjx",
  })
  @get()
  static getHjx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hjx",
  })
  @post("{id}")
  static createHjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
