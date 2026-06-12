import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwn")
export default class IwnController {
  @operation({
    summary: "Get Iwn",
  })
  @get()
  static getIwn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwn",
  })
  @post("{id}")
  static createIwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
