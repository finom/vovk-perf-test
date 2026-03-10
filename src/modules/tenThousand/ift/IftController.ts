import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ift")
export default class IftController {
  @operation({
    summary: "Get Ift",
  })
  @get()
  static getIft = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ift",
  })
  @post("{id}")
  static createIft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
